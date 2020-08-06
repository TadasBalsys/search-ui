import React from 'react';
import MemberTree from './components/member/MemberTree.comp';

import { categories } from './store/categories';
import FiltersContainer from './components/filtersContainer/filtersContainer';
import SelectLists from './components/SelectLists/SelectLists';


const App = (): JSX.Element => {
  return (
    <div className="App">
      {/* <MemberTree categories={categories}></MemberTree> */}
      <FiltersContainer />
      <SelectLists></SelectLists>
    </div>
)}

export default App;
