import React, { useState } from 'react';
import MemberTree from './components/member/MemberTree.comp';

import { categories } from './store/categories';
import FiltersContainer from './components/filtersContainer/filtersContainer';
import CarFilterItem from './components/CarFilter/CarFilterItem/CarFilterItem';
import CarsFilter, { carFilterItemDataInterface } from './components/CarFilter/CarFilter';


const App = (): JSX.Element => {
  const carFilterInitialItem: carFilterItemDataInterface = {
    id: 1,
    carBrands: ['Pasirinkti', 'BMW', 'Opel'],
    carModels: ['Pasirinkti', '0', '1'],
    carModifications: ['Pasirinkti', '2', '3'],
  };

  const userInitialState = {
    userInput: [
      {
          car: "", 
          year: "",
         engine: '',
     },
     ]
    
  }
  

 
  const [userInitial, setUserInitial] = useState ([userInitialState]);

  const addUserHandler = ()=>{
    
  }


  const [carsFilterItems, setCarsFilterItems] = useState<carFilterItemDataInterface[]>([
    carFilterInitialItem
]);

   

  const addCarFilterHandler = () => {
      setCarsFilterItems(prevState => {
          const date = new Date();
          const updatedItems = [
              ...prevState
          ];

          const newCarFilterItem = {
              ...carFilterInitialItem,
              id: date.getTime(),
              
          };

          updatedItems.push(newCarFilterItem);
          return updatedItems
      });
  };

  const removeCarFilterHandler = (id: number) => {
      const updatedFilters = carsFilterItems.filter(item => {
          return item.id !== id || item.id ===1 ;
      });

      setCarsFilterItems(updatedFilters);
  };

  return (
  <div className="App">
    {/* <MemberTree categories={categories}></MemberTree> */}
    <FiltersContainer />
    <CarsFilter
        onRemoveCarFilter={removeCarFilterHandler}
        onAddCarFilter={addCarFilterHandler}
        carsFilterItems={carsFilterItems}
    />
  </div>
)}

export default App;
