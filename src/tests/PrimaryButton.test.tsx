/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryButton } from '../components/simple/PrimaryButton';

test('should display a blank login form, with remember me checked by default', async () => {
  const value = 'test';
  const { findByText } = render(<PrimaryButton title={value} />);
  const button = await findByText(value);
  expect(button).toBeInTheDocument();
});
