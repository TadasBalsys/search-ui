import React from 'react';
import { FiltersProps, SubCat, vehicleBodyType, gearBox, driveWheels, steering_Wheel_Position, part_Of_Place } from '../../store/filtersList';
import classes from  './FiltersContainer.module.scss';
import { fuelType } from '../../store/filtersList';
import { Dropdown } from 'semantic-ui-react';
import OptionsContainer from '../OptionsContainer/OptionsContainer';

const FiltersContainer = ()=>{
 console.log(fuelType);
    return (
        <div>

            <h3 className={classes.Aside}>Filtruoti rezultatai</h3>

            <OptionsContainer data={fuelType} />
            
        </div>
    );
    
   
}

export default FiltersContainer;
