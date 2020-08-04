import React from 'react';

import Category from '../Category/Category.comp';

import { SubCat, Categories } from '../../store/categories';

interface Props {
  title: string;
  categories: SubCat[];
}

const SubCatTree: React.FC<Props> = ({ title, categories }) => {
  return (
    <>
      {(categories as Array<SubCat | Categories>).map((cat) => (
        <Category category={cat as SubCat} />
      ))}
    </>
  );
};

export default SubCatTree;
