import React, { useState } from 'react';

import SubCatTree from '../SubCatTree/SubCatTree.comp';

import { SuperCat, SubCat } from '../../store/categories';

import './SuperCatTree.styles.scss';

interface Props {
  categories: SuperCat[] | SubCat[];
}

const SuperCatTree: React.FC<Props> = ({ categories }) => {
  const [display, setDisplay] = useState<number[]>([-1]);
  const [clickedElem, setClickedElem] = useState<EventTarget[]>([]);

  const handleClick = (e: React.MouseEvent, index: number) => {
    // }
    // if (display.includes(index)) {
    //   setDisplay([-1]);

    // } else {
    //   setDisplay([...display, index]);
    // }

    console.log(index);
    if (clickedElem?.length && !clickedElem.includes(e.target)) {
      console.log('return if');
      return;
    }
    if (display.includes(index)) {
      console.log('if includes part');
      let indexInArr = display.indexOf(index);
      let newDisplayArr = [...display];
      newDisplayArr.splice(indexInArr, 1);

      let elemIndex = clickedElem.indexOf(e.target);
      let newClickElemArr = [...clickedElem];
      let newClickedElemArr = newClickElemArr.splice(elemIndex, 1);
      console.log(clickedElem);
      setClickedElem(newClickedElemArr);
      return setDisplay(newDisplayArr);
    }
    console.log(clickedElem);
    setClickedElem([...clickedElem, e.target]);
    return setDisplay([...display, index]);
  };




  

  const toggleVisib = (index: number) => {
    return display.includes(index);
  };

  return (
    <>
      {(categories as Array<SuperCat | SubCat>).map(
        (subCat: SubCat, index: number) => (
          <div key={index} onClick={(e) => handleClick(e, index)}>
            <h5>{subCat.title}</h5>
            <SubCatTree
              key={index}
              isVisible={toggleVisib(index)}
              categories={subCat.subCat as SubCat[]}
            />
          </div>
        )
      )}
    </>
  );
};

export default SuperCatTree;
