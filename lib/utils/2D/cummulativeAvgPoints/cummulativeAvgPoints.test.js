import assert from 'assert';


import { cummulativeAvgPoints } from './cummulativeAvgPoints';


describe('A cummulativeAvgPoints function', () => {

	const inputs = [1,2,3,4,5,6,7,8,9,10];
	const inputsA = [1,2,3,4];
	const inputsB = [4,5,6,7,8,9,10];
	const average = 5.5;

	it('should return a number', () => {
		assert(typeof cummulativeAvgPoints(inputs) == 'number');
	})

	it('should return the input if only a number input is supplied', () => {
		assert(cummulativeAvgPoints(1) == 1);
	})

	it('should return an average if only an array is supplied', () => {
		assert(cummulativeAvgPoints(inputs) == average);
	})

	it('should throw an error if either an average or a cumulativeN, is supplied without the other', () => {
		let testPassed = false;

		try {
			cummulativeAvgPoints(inputs, 10);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if an input is higher than a single dimensional array', () => {
		let testPassed = false;

		try {
			cummulativeAvgPoints([[1,2,3]]);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if an input is not a number', () => {
		let testPassed = false;

		try {
			cummulativeAvgPoints("string");
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if cumulativeN is not a number', () => {
		let testPassed = false;

		try {
			cummulativeAvgPoints(1,1,"string");
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if cumulativeAvg is not a number', () => {
		let testPassed = false;

		try {
			cummulativeAvgPoints(1,"string",1);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return a correct weighted average based on inputs', () => {
		const averageA = cummulativeAvgPoints(inputsA);
		assert(cummulativeAvgPoints(inputsB, averageA, inputsA.length));
	})

})