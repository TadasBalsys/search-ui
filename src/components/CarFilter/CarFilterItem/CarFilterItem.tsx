import React from 'react';
import classes from './CarFilterItem.module.scss'
import OptionsContainerSelect from '../../filtersContainer/OptionsContainerSelect/OptionsContainerSelect';
import { carFilterItemDataInterface } from '../CarFilter';


interface CarFilterItemPropsInterface {
    
    id: number,
    carBrands: string[],
    carModels: string[],
    carModifications: string[],
    onRemoveCarFilter: (id: number) => void;
}

const CarFilterItem = (props:CarFilterItemPropsInterface)=>{
   return (
        <div data-id={props.id} className={classes.Test}>
            <ul className={classes.UlTest}>

                <li className={classes.ListNew}>
                    <div className={classes.DivListo}>
                        <label htmlFor={'carBrandFilter' + props.id} className={classes.LabelTest}>Auto marke</label>
                        <select name={'carBrandFilter' + props.id} id={'carBrandFilter' + props.id} className={classes.SelectTest}>
                            {
                                props.carBrands.map((brand, index) => {
                                    return <option key={'carBrandFilter' + props.id + index} value={brand}>{brand}</option>
                                })
                            }
                        </select>
                    </div>
                

                
                    <div className={classes.DivListo}>
                        <label htmlFor={'carModelFilter' + props.id}  className={classes.LabelTest}>Auto modelis</label>
                        <select name={'carModelFilter' + props.id} id={'carModelFilter' + props.id} className={classes.SelectTest}>
                            {
                                props.carModels.map((model, index) => {
                                    return <option key={'carModelFilter' + props.id + index} value={model}>{model}</option>
                                })
                            }
                        </select>
                    </div>
               

                
                    <div className={classes.DivListo}>
                        <label htmlFor={'carModificationFilter' + props.id }  className={classes.LabelTest} >Auto modifikacija</label>
                        <select name={'carModificationFilter' + props.id } id={'carModificationFilter' + props.id}   className={classes.SelectTest}>
                            {
                                props.carModifications.map((modification, index) => {
                                    return <option key={'carModificationFilter' + props.id + index} value={modification}>{modification}</option>
                                })
                            }
                        </select>
                    </div>
                </li>
            </ul>
            <a onClick={() => props.onRemoveCarFilter(props.id)} className="delete-item-button">X</a>
        </div>
    )
}

export default CarFilterItem;