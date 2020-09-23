import React from 'react';
import { render } from '@testing-library/react';

import LatestMovieHeader from './latest-movie-header';

describe('LatestMovieHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LatestMovieHeader />);
    expect(baseElement).toBeTruthy();
  });
});
