import React from 'react';
import { render } from '@testing-library/react';

import MovieListUiMovieSearch from './movie-list-ui-movie-search';

describe('MovieListUiMovieSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieListUiMovieSearch />);
    expect(baseElement).toBeTruthy();
  });
});
