/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Counter } from '../components/simple/Counter';

describe('Primary input tests', () => {

  const defaultProps = {
		value: 5,
		maxVal: 10,
		minVal: 0,
		updateValue: (mode: string) => {
			if (mode === 'up') console.log('up');
			else if (mode === 'down') console.log('down');
		}
	}

  test('click on up button', async () => {
		render(<Counter {...defaultProps} />);
  	const buttonUp = document.querySelectorAll('.counter__btn')[1];
		const number = document.querySelector('.counter__val');
		fireEvent.click(buttonUp);
    expect(number?.textContent).toBe('6');
  });

	test('click on down button', async () => {
		render(<Counter {...defaultProps} />);
  	const buttonDown = document.querySelectorAll('.counter__btn')[0];
		const number = document.querySelector('.counter__val');
		fireEvent.click(buttonDown);
    expect(number?.textContent).toBe('4');
  });

	test('click on up button, when value is max', async () => {
		defaultProps.value = defaultProps.maxVal;
		render(<Counter {...defaultProps} />);
  	const buttonUp = document.querySelectorAll('.counter__btn')[1];
		const number = document.querySelector('.counter__val');
		fireEvent.click(buttonUp);
    expect(number?.textContent).toBe(defaultProps.maxVal + '');
  });

	test('click on down button, when value is min', async () => {
		defaultProps.value = defaultProps.minVal;
		render(<Counter {...defaultProps} />);
  	const buttonDown = document.querySelectorAll('.counter__btn')[0];
		const number = document.querySelector('.counter__val');
		fireEvent.click(buttonDown);
    expect(number?.textContent).toBe(defaultProps.minVal + '');
  });
});