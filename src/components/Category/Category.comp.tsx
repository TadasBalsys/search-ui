import React from 'react';
import { Categories, SubCat } from '../../store/categories';

interface Props {
  category: SubCat;
  isVisible: boolean;
}

const Category: React.FC<Props> = ({ category, isVisible }) => {
  const { subCat } = category;

  return (
    <>
      {(subCat as Array<SubCat | Categories>).map((item, index) => (
        <div key={index} className={isVisible ? '' : 'display-none'}>
          <input type='checkbox' />
          <label htmlFor=''>{item.title}</label>
        </div>
      ))}
    </>
  );
};

export default Category;
