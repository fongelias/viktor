import assert from 'assert';


import { cummulativeRangePoints } from './cummulativeRangePoints';
import { arraysEqual } from 'stones';


describe('A cummulativeRangePoints function', () => {

	const inputs = [1,2,3,4,5,6,7,8,9,10];
	const inputsA = [1,2,3,4];
	const inputsB = [4,5,6,7,8,9,10];
	const range = [1,10];

	it('should return an array', () => {
		assert(Array.isArray(cummulativeRangePoints(inputs)));
	})

	it('should return the input as an array if only a number input is supplied', () => {
		assert(arraysEqual(cummulativeRangePoints(1), [1,1]));
	})

	it('should return a range if only an array is supplied', () => {
		assert(arraysEqual(cummulativeRangePoints(inputs), range));
	})

	it('should throw an error if an input is higher than a single dimensional array', () => {
		let testPassed = false;

		try {
			cummulativeRangePoints([[1,2,3]]);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if an input is not a number', () => {
		let testPassed = false;

		try {
			cummulativeRangePoints("string");
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if cummulativeRange is not an array', () => {
		let testPassed = false;

		try {
			cummulativeRangePoints(inputs, "string");
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if cummulativeRange does not have two numbers in the array', () => {
		let testPassed = false;

		try {
			cummulativeRangePoints(inputs, [1, "string"]);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return a correct range based on inputs', () => {
		const rangeA = cummulativeRangePoints(inputsA);
		assert(arraysEqual(cummulativeRangePoints(inputsB, rangeA), range));
	})

})