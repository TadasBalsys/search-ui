import React from 'react';
import Member from './member.comp';

import { SuperCat, SubCat } from '../../store/categories';

interface Props {
  categories: SuperCat[];
}

const MemberTree = (props: Props) => {
  const hasChildren = (cat: SubCat) => {
    return cat.subCat && cat.subCat.length;
  };

  return (
    <>
      {props.categories.map((cat) => {
        
        return (
          <>
            {hasChildren(cat) ? (
              <>
                <Member title={cat.title} />
                <MemberTree categories={cat.subCat as SuperCat[]} />
              </>
            ) : (
              <Member title={cat.title} />
            )}
          </>
        );
      })}
    </>
  );
};

export default MemberTree;
