import React from 'react';
import { UiHeader, UiHeaderProps } from './ui-header';

export default {
  component: UiHeader,
  title: 'UiHeader',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UiHeaderProps = {};

  return <UiHeader />;
};
