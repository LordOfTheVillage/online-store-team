/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PrimarySelect } from '../components/simple/PrimarySelect';

describe('primary select tests', () => {

	const funcOnSelect = jest.fn();

  const defaultProps = {
		onSelect: funcOnSelect,
		// selectedItem: "",
		options: ["test1", "test2", "test3"]
	}

  test('render without errors', async () => {
		const {getByTestId} = render(<PrimarySelect {...defaultProps} />);
  	const select = await getByTestId("select");
  	expect(select).toBeInTheDocument();
  });

	it('display the correct number of options with default title', () => {
		const {getByTestId} = render(<PrimarySelect {...defaultProps} />);
  	const select = getByTestId("select");
		expect(select.children.length).toBe(defaultProps.options.length + 1)
	})

	it('choose one of the options', () => {
		const {getByTestId} = render(<PrimarySelect {...defaultProps} />);
  	const select = getByTestId("select");
		fireEvent.click(select, { target: { value: "test2" } });
		const selectedOption1 = select.children[0] as HTMLOptionElement;
		expect(selectedOption1.selected).toBeFalsy();
		const selectedOption2 = select.children[1] as HTMLOptionElement;
		expect(selectedOption2.selected).toBeFalsy();
		const selectedOption3 = select.children[2] as HTMLOptionElement;
		expect(selectedOption3.selected).toBeTruthy();
		const selectedOption4 = select.children[3] as HTMLOptionElement;
		expect(selectedOption4.selected).toBeFalsy();
	})
});