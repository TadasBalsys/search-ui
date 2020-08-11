import React from 'react';
import classes from './CarFilterItemComponent.module.scss';

export const carBrands={
    title:'Auto markė',
    id:'carBrand',
    subCateg:['Pasirinkti', 'BMW', 'Audi', 'Suzuki']
}

export const carModel={
    title:'Auto modelis',
    id:'carModel',
    subCateg:['Pasirinkti', '1', '2', '3']
}

export const carModificaton={
    title:'Auto modifikacija',
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
                    console.log(rrr);
                    return <option key={props.title + props.id + index} >{rrr}</option>
                })
            }
        </select>
    </div>
    )
}


export default Car;









/*interface MainCarItemMapInterface {
    id:string;
    data: NewCarItemPropsInterface
}

interface NewCarItemPropsInterface {
    
    carBrands: string[],
    carModels: string[],
    carModifications: string[],
}


const CarFilterItemComponent = (props:MainCarItemMapInterface) =>{
    <div className={classes.DivListo}>
        <label htmlFor={ props.id} className={classes.LabelTest}>Auto marke</label>
            <select  name={props.id} id={ props.id} className={classes.SelectTest}>
                {
                    props.data.map((dat:NewCarItemPropsInterface) => {
                        console.log(dat)
                                    return <option key={props.id}>{dat}</option>
                                
                                })
                                

                }
                
        </select>
        
    </div>

}

export default CarFilterItemComponent;*/





