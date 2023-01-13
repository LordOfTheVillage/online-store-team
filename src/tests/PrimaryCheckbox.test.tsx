/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PrimaryCheckbox } from '../components/simple/PrimaryCheckbox';
import { PrimaryCheckboxProps } from 'src/common/types';

describe('Primary checkbox tests', () => {
  const defaultProps: PrimaryCheckboxProps = {
    id: 1,
    title: 'test',
    checked: false,
    onChange: (e: React.ChangeEvent) => {},
    realAmount: 1,
    allAmount: 2,
  };
  const testId = 'checkbox-primary';

  test('should create checkbox with initial text', async () => {
    const props: PrimaryCheckboxProps = { ...defaultProps };
    const { findByTestId } = render(<PrimaryCheckbox {...props} />);
    const checkbox = await findByTestId(testId);
    expect(checkbox.children[1].children[0].textContent).toBe(props.title);
  });

  test('should create checkbox with real and all amount', async () => {
    const props: PrimaryCheckboxProps = { ...defaultProps };
    const expectedText = ` ${props.realAmount} / ${props.allAmount}`;
    const { findByTestId } = render(<PrimaryCheckbox {...props} />);
    const checkbox = await findByTestId(testId);
    expect(checkbox.children[1].children[1].textContent).toBe(expectedText);
  });

  test('should create checkbox with right checked', async () => {
    const props: PrimaryCheckboxProps = { ...defaultProps, checked: false };
    const { findByTestId } = render(<PrimaryCheckbox {...props} />);
    const checkbox = await findByTestId(testId);
    const input = checkbox.children[0] as HTMLInputElement;
    fireEvent.click(input);
    expect(input.checked).toBeTruthy();
  });

  test('should create checkbox with workable function', async () => {
    let suspectedValue = '';
    const props: PrimaryCheckboxProps = {
      ...defaultProps,
      onChange: (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        suspectedValue = target.value;
      },
    };
    const { findByTestId } = render(<PrimaryCheckbox {...props} />);
    const checkbox = await findByTestId(testId);
    const input = checkbox.children[0] as HTMLInputElement;
    fireEvent.click(input);
    expect(suspectedValue).toBe(props.title);
  });
});
