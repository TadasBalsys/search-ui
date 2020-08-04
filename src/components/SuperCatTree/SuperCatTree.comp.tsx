import React from 'react';

import SubCatTree from '../SubCatTree/SubCatTree.comp';

import { SuperCat, SubCat } from '../../store/categories';

import './SuperCatTree.styles.scss';

interface Props {
  categories: SuperCat[] | SubCat[];
  isVisible: boolean;
}

const MemberTree: React.FC<Props> = ({ categories, isVisible }) => {

  const hasSubCat = (cat: SuperCat | SubCat) => {
    return cat.subCat && cat.subCat.length;
  };


  return (
    <>
      {(categories as Array<SuperCat | SubCat>).map((subCat: SubCat) => (
        <>
          <h5>{subCat.title}</h5>
          <SubCatTree title={subCat.title} categories={subCat.subCat as SubCat[]} />
        </>
      ))}
    </>
  );
};

export default MemberTree;
