import React from 'react';

import './latest-movie-header.css';

/* eslint-disable-next-line */
export interface LatestMovieHeaderProps {}

export const LatestMovieHeader = (props: LatestMovieHeaderProps) => {
  return (
    <div className='latest-movie-header'>
      <h2>Latest Movies</h2>
    </div>
  );
};

export default LatestMovieHeader;
