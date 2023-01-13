/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ApplyInput } from '../components/simple/ApplyInput';

describe('Apply input tests', () => {
  const testId = 'apply-input';
  const value = 'test';

  test('should create apply input with text', async () => {
    const { findByTestId } = render(<ApplyInput data={value} string={value} onClick={() => {}} />);
    const div = await findByTestId(testId);
    expect(div.children[0].textContent).toBe(value);
  });

  test('should create apply input with button text', async () => {
    const { findByTestId } = render(<ApplyInput data={value} string={value} onClick={() => {}} />);
    const div = await findByTestId(testId);
    expect(div.children[1].textContent).toBe(value);
  });

  test('should create apply input with workable function', async () => {
    let suspectedValue = '';
    const expectedValue = '1fer3';
    const { findByTestId } = render(
      <ApplyInput
        data={value}
        string={value}
        onClick={() => {
          suspectedValue = expectedValue;
        }}
      />
    );
    const div = await findByTestId(testId);
    fireEvent.click(div.children[1]);
    expect(suspectedValue).toBe(expectedValue);
  });
});
