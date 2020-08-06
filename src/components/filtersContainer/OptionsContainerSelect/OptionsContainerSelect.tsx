import React from 'react';
import classes from './OptionsContainerSelect.module.scss';


export interface CustomSelectPropsInterface{
    initOptionLabel: string | number;
    optionsArray: (string|number)[]
    
};

const OptionsContainerSelect: Function = (props:CustomSelectPropsInterface)=>{
  
    return(
        <select className={classes.OptionsSelectTest}>
            
            <option value={0}>{props.initOptionLabel}</option>
            {
                props.optionsArray.map((option) =>{

                return(
                    
                    <option value={option} key={option}>{option}</option>
                    
                )
                })
            }
            
        </select>
    )

}

export default OptionsContainerSelect;




