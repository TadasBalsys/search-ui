import React from 'react';
import MemberTree from './components/member-tree/MemberTree.comp';

import { categories } from './store/categories';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <MemberTree categories={categories} isVisible={true}></MemberTree>
    </div>
)}

export default App;
