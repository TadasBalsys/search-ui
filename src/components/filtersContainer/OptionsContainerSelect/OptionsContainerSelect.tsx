import React from 'react';


export interface CustomSelectPropsInterface{
    initOptionLabel: string | number;
    optionsArray: (string|number)[]
    
};


// ar imanoma padaryti kad vienas componentas turetu 2 skirtingus pavadinimus ?
const OptionsContainerSelect: Function = (props:CustomSelectPropsInterface)=>{
    

    
    return(
        <select>
            
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




