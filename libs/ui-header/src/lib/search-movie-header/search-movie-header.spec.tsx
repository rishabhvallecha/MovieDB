import React from 'react';
import { render } from '@testing-library/react';

import SearchMovieHeader from './search-movie-header';

describe('SearchMovieHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchMovieHeader />);
    expect(baseElement).toBeTruthy();
  });
});
