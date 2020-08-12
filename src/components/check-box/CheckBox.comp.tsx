import React from 'react';


import './CheckBox.styles.scss';

interface Props {
  selected: any;
  label: any;
  onChange: any;
}

const CheckBox: React.FC<Props> = ({ selected, label, onChange }) => {
  console.log(` CheckBox ${label}`);
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

/**
 
  const Checkbox2 = ({ selected, label, onChange }) => {
  return (
      <div className="checkbox">
      <div 
        className={
          classNames('fa', 'fa-2x', 'checkbox__icon', selected ? 'fa-check-square' : 'fa-square')} onClick={() => onChange(!selected)}></div>    
      <div className="checkbox__label">{label}</div>
    </div>
  )
}



*/
