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
                    
                        id={item.id}
                        carBrands={item.carBrands}
                        carModels={item.carModels}
                        carModifications={item.carModifications}
                        onRemoveCarFilter={props.onRemoveCarFilter}
                        />
                    })
                }

            </ul>
            <Button clicked={props.onAddCarFilter}>Prideti dar viena automobili</Button>
        </div>
    )
}

export default CarsFilter;












































/*interface AddSelectinterface{
    added?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    removed?: (event: React.MouseEvent<HTMLButtonElement>) => {};
    disabled?: boolean;
    key?: string;
}

const SelectLists = ()=> {
    const [name, setName] = useState([
       {name: carsName, option:[] },
       {name: carsModel, option:[]},
       {name: carsModification, option:[] }
    ]);
    
    let Parinktys = [name];

    const [names, setNames]= useState(Parinktys);
    const [active, setActive]= useState(true);

    const pushMoreSelectList = ()=>{
        if (active === true) {
            Parinktys.push(
                name
            );
            console.log(Parinktys);
        }
    }
    
    return(
        <>
            <form action="#" className={classes.Test}> 
                <Button 
                    clicked={pushMoreSelectList}
                >
                Prideti</Button>
                <ul>
                    <li className={classes.ListTest}>   
                        <SelectList nameOfLabel={"Auto markeTest"} optionsArray={carsName()}></SelectList>
                        
                        <SelectList nameOfLabel={"Auto modelisTest"} optionsArray={carsModel()}></SelectList>

                        <SelectList nameOfLabel={"Auto modifikacijaTest"} optionsArray={carsModification()}></SelectList>
                    </li>
                    <div>
                            {name.map((name) => (
                                //ar eina padaryti taip kad mapinant imtu skirtingas reiksmes  nameOfLabel ir OoptionsArray
                            <SelectList nameOfLabel={"Test"} optionsArray={carsName()}> {' '}</SelectList>
       
      ))}
                    </div>
                    
                </ul>
            </form>   
        </>
 );
    
}


export default SelectLists;*/