import React from 'react';

import './page-title.css';

/* eslint-disable-next-line */
export interface PageTitleProps {
}

export const PageTitle = (props: PageTitleProps) => {

  return (
    <div className='app-heading'>
      <h1>Welcome to MovieDB</h1>
    </div>
  );
};

export default PageTitle;
