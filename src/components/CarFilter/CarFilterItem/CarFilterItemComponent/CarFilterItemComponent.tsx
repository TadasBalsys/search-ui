import React from 'react';
import classes from './CarFilterItemComponent.module.scss';

export const carBrands={
    title:'Automobilio markė',
    id:'carBrand',
    subCateg:['Pasirinkti', 'BMW', 'Audi', 'Suzuki']
}

export const carModel={
    title:'Automobilio modelis',
    id:'carModel',
    subCateg:['Pasirinkti', '1', '2', '3']
}

export const carModificaton={
    title:'Automobilio modifikacija',
    id:'carModification',
    subCateg:['Pasirinkti', 'V6', 'V12', 'V16']
       
}

export interface MainCarFilterCompInterface{
    title:string;
    id: string;
    subCateg:string[];
}



const Car: Function =(props:MainCarFilterCompInterface) =>{
    return(
        <div className={classes.DivTest}>
        <label className={classes.LabelTest}>{props.title}</label>
        <select name={props.title + props.id} id={props.title + props.id} className={classes.SelectTest}>
            {
                props.subCateg.map((rrr, index) =>{
                    
                    return <option key={props.title + props.id + index} >{rrr}</option>
                })
            }
        </select>
    </div>
    )
}


export default Car;














