import React from'react';

import {  FiltersProps } from '../../../store/filtersList';
import { SubCat} from '../../../store/filtersList';

interface props {
    id:number;
    data:FiltersProps
}

const OptionsContainer: Function = ({data}: props ) => {
    
    
    

    return data.SubCat.map((dat:SubCat) => ( 
        
            <div key={dat.id}>  
                <br/>
                <input type="checkbox" id=""  />
                <label htmlFor="deasel" > {dat.pav}</label>
            </div>
        )
        
    )
    
}

export default OptionsContainer;

