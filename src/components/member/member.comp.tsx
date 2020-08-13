import React from 'react';
import { Categories } from '../../store/categories';

import CheckBox from '../check-box/CheckBox.comp';

import { State as subOptions } from '../side-menu/SideMenu.comp';
import { DataModal } from '../../store/categories';

import './member.styles.scss';

interface Props {
  options: DataModal[];
  selectedOptions: subOptions;
  onChange: (selectedOptions: subOptions) => void;
}

const Member: React.FC<Props> = ({ options, selectedOptions, onChange }) => {
  const handleCheckboxClicked = (selectedOptionId: keyof DataModal) => {
    // is currently selected
    if (selectedOptions[selectedOptionId]) {
      // remove selected key from options list
      delete selectedOptions[selectedOptionId];
    } else {
      // is not currently selected
      // Add selected key to optionsList
      selectedOptions[selectedOptionId] = {};
    }
    // call onChange function given by parent
    onChange(selectedOptions);
  };

  const handleSubOptionsListChange = (
    optionId: keyof DataModal,
    subSelections: subOptions
  ) => {
    // add sub selections to current optionId
    selectedOptions[optionId] = subSelections;
    // call onChange function given by parent
    onChange(selectedOptions);
  };

  return (
    <div>
      {options.map((option: DataModal, index: number) => {
        return (
          <ul key={index}>
            <CheckBox
              selected={selectedOptions[option.id]}
              label={option.title}
              onChange={() => {
                handleCheckboxClicked(option.id as keyof DataModal);
              }}
            />
            {/* Base Case */}
            {option.subOptions.length > 0 && selectedOptions[option.id] && (
              <Member
                options={option.subOptions}
                selectedOptions={selectedOptions[option.id]}
                onChange={(subSelections: subOptions) => {
                  return handleSubOptionsListChange(
                    option.id as keyof DataModal,
                    subSelections
                  );
                }}
              />
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default Member;
