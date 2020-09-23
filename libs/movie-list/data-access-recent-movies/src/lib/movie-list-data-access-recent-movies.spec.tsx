import React from 'react';
import { render } from '@testing-library/react';

import MovieListDataAccessRecentMovies from './movie-list-data-access-recent-movies';

describe('MovieListDataAccessRecentMovies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieListDataAccessRecentMovies />);
    expect(baseElement).toBeTruthy();
  });
});
