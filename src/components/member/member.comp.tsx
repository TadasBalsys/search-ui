import React from 'react';
import { Categories } from '../../store/categories';

import './member.styles.scss';

interface Props {
  category: Categories;
  // isVisible: boolean;
}

const Member: React.FC<Props> = (props: Props) => {
  return (
    <>
      {
        <h6 >
          {props.category.title}
        </h6>
      }
    </>
  );
};

export default Member;
