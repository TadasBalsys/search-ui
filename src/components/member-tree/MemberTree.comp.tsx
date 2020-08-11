import React, { useState } from 'react';
import Member from '../member/member.comp';

import { SuperCat, SubCat, Categories } from '../../store/categories';

import './memberTree.styles.scss';

interface Props {
  categories: SuperCat[] | SubCat[];
  isVisible: boolean;
}

interface State {
  [key: string]: boolean;
}

const MemberTree: React.FC<Props> = ({ categories, isVisible }) => {
  const [visibleItems, setVisibleItems] = useState<State>({});

  const handleClick = (e: React.MouseEvent, item: string) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handler = (children: SuperCat[] | SubCat[] | Categories[]) => {
    return (children as Array<SuperCat | SubCat | Categories>).map(
      (subCat: SuperCat | SubCat | Categories) => {
        if (!subCat.hasOwnProperty('subCat')) {
          return <Member category={subCat as Categories} />;
        }
        return (
          <div>
            <h2 onClick={(e) => handleClick(e, subCat.title)} className=''>
              {subCat.title}
            </h2>
            <div
              className={`${
                visibleItems[subCat.title] ? 'show' : 'display-none'
              }`}
            >
              {handler((subCat as SubCat).subCat)}
            </div>
          </div>
        );
      }
    );
  };

  return (
    <>
      {(categories as Array<SuperCat | SubCat>).map((cat, i) => {
        return handler(cat.subCat);
      })}
    </>
  );
};

export default MemberTree;
