import React from 'react';

import CheckBox from '../check-box/CheckBox.comp';

import './member.styles.scss';

interface Props {
  options: any;
  selectedOptions: any;
  onChange: any;
}

const Member: React.FC<Props> = ({ options, selectedOptions, onChange }) => {
  const handleCheckboxClicked = (selectedOptionId: any) => {
    console.log('handleCheckboxClicked');
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

  const handleSubOptionsListChange = (optionId: any, subSelections: any) => {
    console.log('handleSubOptionsListChange');
    // add sub selections to current optionId
    selectedOptions[optionId] = subSelections;
    // call onChange function given by parent
    onChange(selectedOptions);
  };

  return (
    <div>
      {options.map((option: any) => (
        <ul>
          <CheckBox
            selected={selectedOptions[option.id]}
            label={option.title}
            onChange={() => {
              handleCheckboxClicked(option.id);
            }}
          />
          {/* Base Case */}
          {option.subOptions.length > 0 && selectedOptions[option.id] && (
            <Member
              options={option.subOptions}
              selectedOptions={selectedOptions[option.id]}
              onChange={(subSelections: any) =>
                handleSubOptionsListChange(option.id, subSelections)
              }
            />
          )}
        </ul>
      ))}
    </div>
  );
};

export default Member;
