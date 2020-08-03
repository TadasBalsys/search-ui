import React from 'react';
import MemberTree from './components/member/MemberTree.comp';

import { categories } from './store/categories';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <MemberTree categories={categories}></MemberTree>
    </div>
)}

export default App;
