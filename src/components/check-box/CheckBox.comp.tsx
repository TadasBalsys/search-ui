import React from 'react';


import { State as subOptions } from '../side-menu/SideMenu.comp';


import './CheckBox.styles.scss';

interface Props {
  selected: subOptions;
  label: string;
  onChange: (selectedOptionId: boolean) => void;
}

const CheckBox: React.FC<Props> = ({ selected, label, onChange }) => {
  return (
    <li className='checkbox'>
      <div
        className={'checkbox__icon'}
        onClick={() => onChange(!selected)}
      ></div>
      

      <div className='label'>{label}</div>
    </li>
  );
};

export default CheckBox;
