import { dateCheck } from '../components/utils/check';

const testDate: Array<string[]> = [
  ['e', 'z', 'j'],
	['/', '.', ';'],
	['1', '5', '9'],
	['12', '33', '01'],
	['12/354', '33/331', '01/087']
];

describe('Check different date', () => {
  test('Check date if write letter', () => {
    const expected = '';
		expect(testDate[0].every(item => dateCheck(item) === expected)).toBe(true);
  });

	test('Check date if write simbol', () => {
    const expected = '';
		expect(testDate[1].every(item => dateCheck(item) === expected)).toBe(true);
  });

	test('Check date if write number', () => {
    const expected = testDate[2];
		expect(testDate[2].every((item, index) => dateCheck(item) === expected[index])).toBe(true);
	});

	test('Check date if write two number', () => {
    const expected = testDate[3].map(item => `${item}/`);
		expect(testDate[3].every((item, index) => dateCheck(item) === expected[index])).toBe(true);
	});

	test('Check date if length more then 5', () => {
    const expected = testDate[4].map(item => item.slice(0, 5));
		expect(testDate[4].every((item, index) => dateCheck(item) === expected[index])).toBe(true);
	});
})