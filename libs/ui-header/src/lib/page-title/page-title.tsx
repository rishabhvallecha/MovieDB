import React from 'react';

import './page-title.css';

/* eslint-disable-next-line */
export interface PageTitleProps {
  name: string
}

export const PageTitle = (props: PageTitleProps) => {

  const {name} = props
  return (
    <div className='app-heading'>
      <h1>Welcome to MovieDB , {name}</h1>
    </div>
  );
};

export default PageTitle;
