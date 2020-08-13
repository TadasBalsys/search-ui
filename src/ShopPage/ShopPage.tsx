import React, { useState } from 'react';
import SideMenu from '../components/side-menu/SideMenu.comp';
import FiltersContainer from '../components/filtersContainer/filtersContainer';
import CarsFilter, {
  carFilterItemDataInterface,
} from '../components/CarFilter/CarFilter';
import FilterInfo from '../components/FilterResult/FilterInfo/FilterInfo';
import FilterResult from '../components/FilterResult/FilterResult';

import classes from './ShopPage.module.scss';

const ShopPage = () => {
  const carFilterInitialItem: carFilterItemDataInterface = {
    id: 1,
    carBrands: [],
    carModels: ['Pasirinkti', '0', '1'],
    carModifications: ['Pasirinkti', '2', '3'],
  };

  const [carsFilterItems, setCarsFilterItems] = useState<
    carFilterItemDataInterface[]
  >([carFilterInitialItem]);

  const addCarFilterHandler = () => {
    setCarsFilterItems((prevState) => {
      const date = new Date();
      const updatedItems = [...prevState];

      const newCarFilterItem = {
        ...carFilterInitialItem,
        id: date.getTime(),
      };

      updatedItems.push(newCarFilterItem);
      return updatedItems;
    });
  };

  const removeCarFilterHandler = (id: number) => {
    const updatedFilters = carsFilterItems.filter((item) => {
      return item.id !== id || item.id === 1;
    });

    setCarsFilterItems(updatedFilters);
  };
  return (
    <div className={classes.DivTest}>
      <div>
        <SideMenu />
        <FiltersContainer />
      </div>

      <div>
        <CarsFilter
          onRemoveCarFilter={removeCarFilterHandler}
          onAddCarFilter={addCarFilterHandler}
          carsFilterItems={carsFilterItems}
        />
        <FilterInfo />
        <FilterResult />
        <FilterInfo />
      </div>
    </div>
  );
};

export default ShopPage;
