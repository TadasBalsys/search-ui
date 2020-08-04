import React, { useState } from 'react';

import Category from '../Category/Category.comp';

import { SubCat, Categories } from '../../store/categories';

interface Props {
  categories: SubCat[];
  isVisible: boolean;
}

const SubCatTree: React.FC<Props> = ({ categories, isVisible }) => {
  const [display, setDisplay] = useState<number>(-1);
  const [clickedElem, setClickedElem] = useState<EventTarget>();

  const handleClick = (e: React.MouseEvent, index: number) => {
    if (clickedElem && clickedElem !== e.target) {
      return;
    }
    if (index === display) {
      setDisplay(-1);
    } else {
      setDisplay(index);
      setClickedElem(e.target);
    }
  };

  return (
    <div className={isVisible ? '' : 'display-none'}>
      {(categories as Array<SubCat | Categories>).map((cat, index) => (
        <div onClick={(e) => handleClick(e, index)}>
          <h5>{cat.title}</h5>
          <Category
            key={index}
            isVisible={display === index}
            category={cat as SubCat}
          />
        </div>
      ))}
    </div>
  );
};

export default SubCatTree;
