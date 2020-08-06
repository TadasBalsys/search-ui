import React, { useState } from 'react';
import classes from './SelectLists.module.scss';

import { carsName, carsModel, carsModification } from '../../store/filtersList';
import Button from '../Button/Button';
import SelectList from './SelectList/SelectList';
import { render } from '@testing-library/react';

interface AddSelectinterface{
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


export default SelectLists;