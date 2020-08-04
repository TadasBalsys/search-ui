import React from 'react';
import { Categories, SubCat } from '../../store/categories';

interface Props {
  category: SubCat;
}

const Category: React.FC<Props> = ({ category }) => {
  const { subCat } = category;

  return (
    <>
      {(subCat as Array<SubCat | Categories>).map((item) => (
        <div>
          <input type='checkbox' />
          <label htmlFor=''>{item.title}</label>
        </div>
      ))}
    </>
  );
};

export default Category;
