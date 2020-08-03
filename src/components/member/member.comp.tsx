import React from 'react';

interface Props {
  title?: string;
  subCat?: [];
}

const Member = (props: Props) => {
  return (<>
    {
      <h1>{props.title}</h1>
    }
  </>);
};

export default Member;
