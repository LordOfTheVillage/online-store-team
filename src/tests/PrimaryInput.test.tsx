/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PrimaryInput } from '../components/simple/PrimaryInput';

describe('Primary input tests', () => {
  const defaultProps = {
    title: 'test',
    onChange: (string: string) => console.log(string),
  };

  test('should create input with initial text', async () => {
    const initialText = 'start text';
    const { findByPlaceholderText } = render(<PrimaryInput {...defaultProps} startSearchSettings={initialText} />);
    const input = (await findByPlaceholderText(defaultProps.title)) as HTMLInputElement;
    expect(input.value).toBe(initialText);
  });

  test('should create input with workable change value', async () => {
    const value = '12345';
    const { findByPlaceholderText } = render(<PrimaryInput {...defaultProps} />);
    const input = (await findByPlaceholderText(defaultProps.title)) as HTMLInputElement;
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  test('should create input with workable change function', async () => {
    let startValue = '';
    const expectedValue = '1fer3';
    const props = {
      ...defaultProps,
      onChange: (data: string) => {
        startValue = data;
      },
    };
    const { findByPlaceholderText } = render(<PrimaryInput {...props} />);
    const input = (await findByPlaceholderText(props.title)) as HTMLInputElement;
    fireEvent.change(input, { target: { value: expectedValue } });
    expect(startValue).toBe(expectedValue);
  });
});
