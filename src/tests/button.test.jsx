/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';

test('Login button is rendered', () => {
  const { getByPlaceholderText, debug } = render(<Navbar />);
  debug();
});
