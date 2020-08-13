import React from 'react';
import classes from './CarFilterItem.module.scss';

import {
  carBrands,
  carModel,
  carModificaton,
} from './CarFilterItemComponent/CarFilterItemComponent';
import Car from './CarFilterItemComponent/CarFilterItemComponent';

interface CarFilterItemPropsInterface {
  id: number;
  carBrands: string[];
  carModels: string[];
  carModifications: string[];
  onRemoveCarFilter: (id: number) => void;
}

const CarFilterItem = (props: CarFilterItemPropsInterface) => {
  return (
    <div data-id={props.id} className={classes.Test}>
      <ul className={classes.UlTest}>
        <li className={classes.ListNew}>
          <Car
            title={carBrands.title}
            id={carBrands.id}
            subCateg={carBrands.subCateg}
          />

          <Car
            title={carModel.title}
            id={carModel.id}
            subCateg={carModel.subCateg}
          />

          <Car
            title={carModificaton.title}
            id={carModificaton.id}
            subCateg={carModificaton.subCateg}
          />
        </li>
      </ul>
      <span
        onClick={() => props.onRemoveCarFilter(props.id)}
        className='delete-item-button'
      >
        X
      </span>
    </div>
  );
};

export default CarFilterItem;
