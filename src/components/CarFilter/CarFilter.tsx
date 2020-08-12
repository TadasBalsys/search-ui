import React from 'react';
import CarFilterItem from './CarFilterItem/CarFilterItem'
import Button from '../Button/Button';
import classes from './CarsFilter.module.scss';


interface CarsFilterPropsInterface {
    carsFilterItems: carFilterItemDataInterface[];
    onAddCarFilter: () => void;
    onRemoveCarFilter: (id: number) => void;
}

export interface carFilterItemDataInterface {
    
    id: number,
    carBrands: string[],
    carModels: string[],
    carModifications: string[],
}


const CarsFilter = (props:CarsFilterPropsInterface) =>{
    return(
        <div className={classes.DivTest}>
            <ul className="cars-filter-list">
                {
                    props.carsFilterItems.map(item =>{
                        return <CarFilterItem 
                        key={item.id}
                        id={item.id}
                        carBrands={item.carBrands}
                        carModels={item.carModels}
                        carModifications={item.carModifications}
                        onRemoveCarFilter={props.onRemoveCarFilter}
                        />
                    })
                }

            </ul>
            <Button clicked={props.onAddCarFilter}>Prideti dar vieną automobilį</Button>  <Button>FILTRUOTI</Button>
           
        </div>
        
    )
    
}

export default CarsFilter;
