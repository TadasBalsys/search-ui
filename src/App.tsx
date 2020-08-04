import React from 'react';
import MemberTree from './components/member/MemberTree.comp';

import { categories } from './store/categories';
import FiltersContainer from './components/filtersContainer/filtersContainer';


const App = (): JSX.Element => {
  return (
    <div className="App">
      {/* <MemberTree categories={categories}></MemberTree> */}
      <FiltersContainer />
    </div>
)}

export default App;
