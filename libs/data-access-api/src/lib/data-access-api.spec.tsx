import React from 'react';
import { render } from '@testing-library/react';

import DataAccessApi from './data-access-api';

describe('DataAccessApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessApi />);
    expect(baseElement).toBeTruthy();
  });
});
