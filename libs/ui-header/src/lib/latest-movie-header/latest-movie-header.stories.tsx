import React from 'react';
import {
  LatestMovieHeader,
  LatestMovieHeaderProps,
} from './latest-movie-header';

export default {
  component: LatestMovieHeader,
  title: 'LatestMovieHeader',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: LatestMovieHeaderProps = {};

  return <LatestMovieHeader />;
};
