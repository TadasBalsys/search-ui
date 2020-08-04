import React from'react';
import classes from './OptionsContainer.module.scss';
import { fuelType, vehicleBodyType, gearBox, driveWheels, steering_Wheel_Position, part_Of_Place, FiltersProps } from '../../store/filtersList';
import { SubCat} from '../../store/filtersList';

interface props {
    data:FiltersProps
}

const OptionsContainer: Function = ({data}: props ) => {
    console.log(data);
    
    // <h5 className={classes.FilterTitle}>{fuelType.title}</h5>;

    return data.SubCat.map((dat:SubCat) => ( <> 
                
                <br/>
                <input type="checkbox" id="deasel" />
                <label htmlFor="deasel"> {dat.pav}</label>
            </>
        )
    )
    
}

export default OptionsContainer;


/*
return(


    
    <>
    <h5 className={classes.FilterTitle}>{fuelType.title}</h5>
    {fuelType.SubCat.map( (value)=>{
        console.log(value)
        return (
            <>  
                <br/>
                <input type="checkbox" id="deasel" />
                <label htmlFor="deasel"> {value.pav}</label>
            </>
        )
    })}
    <>
            <h5 className={classes.FilterTitle}>{vehicleBodyType.title}</h5>
            {vehicleBodyType.SubCat.map((value)=> {
                return(
                    <>
                        <br/>
                        <input type="checkbox" id="sedan" />
                        <label htmlFor="sedan"> {value.pav}</label>
                    </>
                )
            })}
            </>

            <>
            <h5 className={classes.FilterTitle}>{gearBox.title}</h5>
            {gearBox.SubCat.map((value)=> {
                return(
                    <>
                        <br/>
                        <input type="checkbox" id="manual" />
                        <label htmlFor="maual"> {value.pav}</label>
                    </>
                )
            })}
            </>

             <>
            <h5 className={classes.FilterTitle}>{driveWheels.title}</h5>
            {driveWheels.SubCat.map((value)=> {
                return(
                    <>
                        <br/>
                        <input type="checkbox" id="front" />
                        <label htmlFor="front"> {value.pav}</label>
                    </>
                )
            })}
            </>

            <>
            <h5 className={classes.FilterTitle}>{steering_Wheel_Position.title}</h5>
            {steering_Wheel_Position.SubCat.map((value)=> {
                return(
                    <>
                        <br/>
                        <input type="checkbox" id="left" />
                        <label htmlFor="right"> {value.pav}</label>
                    </>
                )
            })}
            </> 

            <>
            <h5 className={classes.FilterTitle}>{part_Of_Place.title}</h5>
            {part_Of_Place.SubCat.map((value)=> {
                return(
                    <>
                        <br/>
                        <input type="checkbox" id="all" />
                        <label htmlFor="all"> {value.pav}</label>
                    </>
                )
            })}
            </>
    </>
)
}*/
               