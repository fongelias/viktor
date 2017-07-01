import assert from 'assert';


import { evalError } from './evalError';


describe('An evalError function', () => {


	const inputA = [
		[1,2],
		[3,4],
		[5,6],
	];
	const weightA = [0,0];
	const errorA = inputA[2][0] + inputA[1][0] + inputA[0][0];


	it('should return a number, integrating with evalGuess', () => {
		assert(typeof evalError(inputA, weightA) == 'number');
	});

	it('should throw an error if the input is not a two dimensional array', () => {
		let testPassed = false;

		try {
			evalError("A String", weightA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	});

	it('should throw an error if the input is not an array of arrays of numbers', () => {
		let testPassed = false;

		try {
			evalError(["A String"], weightA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	});

	it('should throw an error if a value in the input is not an array of numbers', () => {
		let testPassed = false;

		try {
			evalError([[1,2],["String"]], weightA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	});

	it('should throw an error if the weightArr is not an array', () => {
		let testPassed = false;

		try {
			evalError(inputA, "A String");
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if the weightArr is not a single dimensional array', () => {
		let testPassed = false;
		
		try {
			evalError(inputA, [[]]);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if the weightArr is not an array of numbers', () => {
		let testPassed = false;

		try {
			evalError(inputA, ["A String"]);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if one of the arguments are missing', () => {
		let testPassed = false;
		
		try {
			evalError(inputA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct value', () => {
		assert(evalError(inputA, weightA) == errorA);
	})
})