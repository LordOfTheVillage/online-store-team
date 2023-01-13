/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CopyButton } from '../components/simple/CopyButton';

describe('copy button tests', () => {
	Object.defineProperty(navigator, "clipboard", {
		value: {
			writeText: () => {},
		},
	});

	const values = {
		defaultVal: 'Copy',
		clickVal: 'Copied'
	}

	test('text on the button, when initialized', async () => {
		const value = values.defaultVal;
		const { findByText } = render(<CopyButton title={value} />);
		const button = await findByText(value);
		expect(button.textContent).toBe(values.defaultVal);
		
	});

	test('text on button, when link is copying', async () => {
		const value = values.defaultVal;
		const { findByText } = render(<CopyButton title={value} />);
		const button = await findByText(value);
		fireEvent.click(button);
		expect(button.textContent).toBe(values.clickVal);
	});

	test('text on button, when link was copied', async () => {
		const value = values.defaultVal;
		const { findByText } = render(<CopyButton title={value} />);
		const button = await findByText(value);
		fireEvent.click(button);
		setTimeout(() => expect(button.textContent).toBe(values.defaultVal), 2000)
		
	});
});

