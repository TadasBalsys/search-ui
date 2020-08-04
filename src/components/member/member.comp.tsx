import React from 'react';
import { Categories } from '../../store/categories';

interface Props {
  category: Categories
}

const Member: React.FC<Props> = (props: Props) => {
  return (<>
    {
      <h1>{props.category.title}</h1>
    }
  </>);
};

export default Member;
