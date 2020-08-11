import React from 'react';
import { fuelType, vehicleBodyType, gearBox, driveWheels, steering_Wheel_Position, part_Of_Place, year, color, getYearsArray, getEngineVolumeArray, engineVolume, getEnginePowerArray, enginePower } from '../../store/filtersList';
import classes from  './FiltersContainer.module.scss';

import OptionsContainer from './OptionsContainer/OptionsContainer';

import OptionsContainerSelect  from './OptionsContainerSelect/OptionsContainerSelect';

import Button from '../Button/Button';



const FiltersContainer = ()=>{
        
        return (

        <div className={classes.MainContainer} >

            <h3 className={classes.Aside}>Filtruoti rezultatai</h3>

            <h5 className={classes.FilterTitle}>{fuelType.title}</h5>
            <OptionsContainer data={fuelType} key={fuelType.id}  />

            <h5 className={classes.FilterTitle}>{vehicleBodyType.title}</h5>
            <OptionsContainer data={vehicleBodyType} key={vehicleBodyType.id}/>

            <h5 className={classes.FilterTitle}>{gearBox.title}</h5>
            <OptionsContainer data={gearBox} key={gearBox.id}/>

            <h5 className={classes.FilterTitle}>{driveWheels.title}</h5>
            <OptionsContainer data={driveWheels} key={driveWheels.id}/>

            <h5 className={classes.FilterTitle}>{steering_Wheel_Position.title}</h5>
            <OptionsContainer data={steering_Wheel_Position} key={steering_Wheel_Position.id}/>

            <h5 className={classes.FilterTitle}>{part_Of_Place.title}</h5>
            <OptionsContainer data={part_Of_Place} key={part_Of_Place.id}/>

            <h5 className={classes.FilterTitle}>{color.title}</h5>
            <OptionsContainer data={color} key={color.id} />
            
            <h5 className={classes.FilterTitle}>{year.title}</h5>
            <OptionsContainerSelect optionsArray={getYearsArray()} initOptionLabel={"Nuo"}/> <OptionsContainerSelect optionsArray={getYearsArray()} initOptionLabel={"Iki"} /> 

            <h5 className={classes.FilterTitle}>{engineVolume.title}</h5>
            <OptionsContainerSelect optionsArray={getEngineVolumeArray()} initOptionLabel={"Nuo"}/> <OptionsContainerSelect optionsArray={getEngineVolumeArray()} initOptionLabel={"Iki"}/>

            <h5 className={classes.FilterTitle}>{enginePower.title}</h5>
            <OptionsContainerSelect optionsArray={getEnginePowerArray()} initOptionLabel={"Nuo"}/> <br/> <OptionsContainerSelect optionsArray={getEnginePowerArray()} initOptionLabel={"Iki"}/>
            
            <br/> <Button>FILTRUOTI</Button> <Button>IŠVALYTI</Button>

        </div>
    ); 
}

export default FiltersContainer;
