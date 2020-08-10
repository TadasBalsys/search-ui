import React, { useState } from 'react';

import Category from '../Category/Category.comp';

import { SubCat, Categories } from '../../store/categories';

import './SubCatTree.styles.scss';

interface Props {
  categories: SubCat[];
  isVisible: boolean;
}

const SubCatTree: React.FC<Props> = ({ categories, isVisible }) => {
  const [display, setDisplay] = useState<number[]>([-1]);
  const [clickedElem, setClickedElem] = useState<EventTarget | null>();

  const handleClick = (e: React.MouseEvent, index: number) => {
    if (clickedElem && clickedElem !== e.target) {
      return;
    }
    if (display.includes(index)) {
      setDisplay([-1]);
      setClickedElem(null);
    } else {
      setDisplay([...display, index]);
      setClickedElem(e.target);
    }
  };

    const toggleVisib = (index: number) => {
      return display.includes(index);
    };


  return (
    <div className={isVisible ? '' : 'display-none'}>
      {(categories as Array<SubCat | Categories>).map((cat, index) => (
        <div
          key={index}
          onClick={(e) => handleClick(e, index)}
          className={'sub-cat'}
        >
          <h5>{cat.title}</h5>
          <Category
            key={index}
            isVisible={toggleVisib(index)}
            category={cat as SubCat}
          />
        </div>
      ))}
    </div>
  );
};

export default SubCatTree;
