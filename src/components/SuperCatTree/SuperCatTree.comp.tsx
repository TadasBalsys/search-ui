import React, { useState } from 'react';

import SubCatTree from '../SubCatTree/SubCatTree.comp';

import { SuperCat, SubCat } from '../../store/categories';

import './SuperCatTree.styles.scss';

interface Props {
  categories: SuperCat[] | SubCat[];
}

const MemberTree: React.FC<Props> = ({ categories }) => {
  const [display, setDisplay] = useState<number>(-1);
  const [clickedElem, setClickedElem] = useState<EventTarget | null>();

  const handleClick = (e: React.MouseEvent, index: number) => {
    if (clickedElem && clickedElem !== e.target) {
      return;
    }
    if (index === display) {
      setClickedElem(null);
      setDisplay(-1);
    } else {
      setDisplay(index);
      setClickedElem(e.target);
    }
  };

  return (
    <>
      {(categories as Array<SuperCat | SubCat>).map(
        (subCat: SubCat, index: number) => (
          <div onClick={(e) => handleClick(e, index)}>
            <h5>{subCat.title}</h5>
            <SubCatTree
              key={index}
              isVisible={display === index}
              categories={subCat.subCat as SubCat[]}
            />
          </div>
        )
      )}
    </>
  );
};

export default MemberTree;
