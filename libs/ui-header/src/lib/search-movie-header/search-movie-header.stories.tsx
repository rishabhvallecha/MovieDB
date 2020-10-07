import React from 'react';
import {
  SearchMovieHeader,
  SearchMovieHeaderProps,
} from './search-movie-header';

export default {
  component: SearchMovieHeader,
  title: 'SearchMovieHeader',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SearchMovieHeaderProps = {};

  return <SearchMovieHeader />;
};
