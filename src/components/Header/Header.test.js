import React from 'react';
import Header from './Header.component';
import { render } from '@testing-library/react';

describe('Header component', () => {
  test('header component render', async () => {
    const { container } = render(<Header />);
    expect(container.firstChild).not.toBeNull();
  });

  test('must render the store name', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Besto Bayuru')).not.toBeNull();
  });
});
