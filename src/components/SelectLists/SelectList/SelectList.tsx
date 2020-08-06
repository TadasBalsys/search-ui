import React from 'react';
import classes from './SelectList.module.scss'
import OptionsContainerSelect from '../../filtersContainer/OptionsContainerSelect/OptionsContainerSelect';
import { carsName } from '../../../store/filtersList';
interface SelectListInterface {
    nameOfLabel: string;
    optionsArray:string[];
    children?:React.ReactNode;
}

const SelectList = (props:SelectListInterface)=>{
  return (
    <div className={classes.DivTest}>
        <label className={classes.LabelTest}> {props.nameOfLabel}</label>
        <OptionsContainerSelect optionsArray={props.optionsArray} initOptionLabel={"Pasirinkti"} /> 
    </div>
    
  )   
}

export default SelectList; 