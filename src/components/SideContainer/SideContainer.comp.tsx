import React from 'react'

import SuperCatTree from '../SuperCatTree/SuperCatTree.comp';

import { categories } from '../../store/categories';

const SideContainer = () => {
  return (
    <div>
      <input placeholder='Kategorijų paieška'/>
      <SuperCatTree categories={categories} isVisible />
    </div>
  )
}

export default SideContainer;