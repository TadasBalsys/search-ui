import React from 'react';

import SuperCatTree from '../SuperCatTree/SuperCatTree.comp';

import { categories } from '../../store/categories';

const SideContainer = () => (
  <div>
    <input placeholder='Kategorijų paieška' />
    <SuperCatTree categories={categories} />
  </div>
);

export default SideContainer;
