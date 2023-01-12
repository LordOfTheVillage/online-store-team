/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryButton } from '../components/simple/PrimaryButton';

describe('Primary button tests', () => {
  test('should create button with text', async () => {
    const value = 'test';
    const { findByText } = render(<PrimaryButton title={value} />);
    const button = await findByText(value);
    expect(button).toBeInTheDocument();
  });
});
