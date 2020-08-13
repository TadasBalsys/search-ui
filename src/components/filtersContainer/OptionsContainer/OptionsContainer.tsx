import React from'react';

import {  FiltersProps } from '../../../store/filtersList';
import { SubCat} from '../../../store/filtersList';
import classes from './OptionsContainer.module.scss';


export interface props {
    
    id:number;
    data:FiltersProps
}

const OptionsContainer: Function = ({data}: props ) => {

    return data.SubCat.map((dat:SubCat) => ( 
        
            <li key={dat.id} className={classes.test}>  
                <br/>
                <input type="checkbox" id=""  />
                <label htmlFor="deasel" > {dat.pav}</label>
            </li>
        
        ) 
    );
}

export default OptionsContainer;

