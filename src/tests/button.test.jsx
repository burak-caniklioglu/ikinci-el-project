/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../src/components/Navbar';

test('Login button is rendered', () => {
  const { debug } = render(<Navbar />);
  debug();
});