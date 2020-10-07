import React from 'react';
import { PageTitle, PageTitleProps } from './page-title';

export default {
  component: PageTitle,
  title: 'PageTitle',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: PageTitleProps = {};

  return <PageTitle />;
};
