import React from 'react';
import MemberTree from './components/member-tree/MemberTree.comp';

import { categories } from './store/categories';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <MemberTree isVisible categories={categories}></MemberTree>
    </div>
)}

export default App;
