/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Counter } from '../components/simple/Counter';

describe('counter tests', () => {

  const defaultProps = {
		value: 5,
		maxVal: 10,
		minVal: 0,
		updateValue: (mode: string) => {}
	}

  test('click on up button', async () => {
		const {findByTestId} = render(<Counter {...defaultProps} />);
  	const buttonUp = await findByTestId('counter-btn-up');
		const number = await findByTestId('counter-val');
		fireEvent.click(buttonUp);
    expect(number.textContent).toBe('6');
  });

	test('click on down button', async () => {
		const {findByTestId} = render(<Counter {...defaultProps} />);
		const buttonDown = await findByTestId('counter-btn-down');
		const number = await findByTestId('counter-val');
		fireEvent.click(buttonDown);
    expect(number.textContent).toBe('4');
  });

	test('click on up button, when value is max', async () => {
		defaultProps.value = defaultProps.maxVal;
		const {findByTestId} = render(<Counter {...defaultProps} />);
		const buttonUp = await findByTestId('counter-btn-up');
		const number = await findByTestId('counter-val');
		fireEvent.click(buttonUp);
    expect(number.textContent).toBe(defaultProps.maxVal + '');
  });

	test('click on down button, when value is min', async () => {
		defaultProps.value = defaultProps.minVal;
		const {findByTestId} = render(<Counter {...defaultProps} />);
		const buttonDown = await findByTestId('counter-btn-down');
		const number = await findByTestId('counter-val');
		fireEvent.click(buttonDown);
    expect(number.textContent).toBe(defaultProps.minVal + '');
  });
});