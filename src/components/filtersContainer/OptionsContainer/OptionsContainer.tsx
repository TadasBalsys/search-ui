import React from'react';
import classes from './OptionsContainer.module.scss';
import {  FiltersProps } from '../../../store/filtersList';
import { SubCat} from '../../../store/filtersList';

interface props {
    data:FiltersProps
}

const OptionsContainer: Function = ({data}: props ) => {
    
    
    

    return data.SubCat.map((dat:SubCat) => ( 
            <>  
                <br/>
                <input type="checkbox" id="deasel"/>
                <label htmlFor="deasel" > {dat.pav}</label>
            </>
        )
    )
    
}

export default OptionsContainer;
