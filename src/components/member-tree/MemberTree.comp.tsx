import React, { useState } from 'react';
import Member from '../member/member.comp';

import { SuperCat, SubCat, Categories } from '../../store/categories';

import './memberTree.styles.scss';

interface Props {
  categories: SuperCat[] | SubCat[];
  isVisible: boolean;
}

const MemberTree: React.FC<Props> = ({ categories, isVisible }) => {
  const [display, setDisplay] = useState(!isVisible ? true : false);

  const hasSubCat = (cat: SuperCat | SubCat) => {
    return cat.subCat && cat.subCat.length;
  };


  return (
    <>
      {(categories as Array<SuperCat | SubCat>).map((cat, i) => {
        return hasSubCat(cat) ? (
          <ul key={i} className={isVisible ? 'show' : 'display-none'}>
            <li>
              <span onClick={() => setDisplay(!display)}>{cat.title}</span>
              <MemberTree
                isVisible={display}
                categories={(cat.subCat as unknown) as SubCat[]}
              />
            </li>
          </ul>
        ) : (
          <Member category={(cat as unknown) as Categories} />
        );
      })}
    </>
  );
};

export default MemberTree;
