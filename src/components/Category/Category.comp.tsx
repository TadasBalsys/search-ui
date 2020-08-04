import React from 'react';
import { Categories, SubCat } from '../../store/categories';

interface Props {
  category: SubCat;
  isVisible: boolean;
}

const Category: React.FC<Props> = ({ category, isVisible }) => {
  const { subCat } = category;

  return (
    <div className={isVisible ? '' : 'display-none'}>
      {(subCat as Array<SubCat | Categories>).map((item) => (
        <div>
          <input type='checkbox' />
          <label htmlFor=''>{item.title}</label>
        </div>
      ))}
    </div>
  );
};

export default Category;
