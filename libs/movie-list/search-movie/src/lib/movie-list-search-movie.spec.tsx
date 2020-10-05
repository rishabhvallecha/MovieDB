import React from 'react';
import { render } from '@testing-library/react';

import MovieListSearchMovie from './movie-list-search-movie';

describe('MovieListSearchMovie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieListSearchMovie />);
    expect(baseElement).toBeTruthy();
  });
});
