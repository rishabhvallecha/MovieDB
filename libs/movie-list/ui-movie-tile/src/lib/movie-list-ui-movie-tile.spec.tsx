import React from 'react';
import { render } from '@testing-library/react';

import MovieListUiMovieTile from './movie-list-ui-movie-tile';

describe('MovieListUiMovieTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieListUiMovieTile />);
    expect(baseElement).toBeTruthy();
  });
});
