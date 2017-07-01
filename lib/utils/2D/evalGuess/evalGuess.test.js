import assert from 'assert';


import { evalGuess } from './evalGuess';


describe('An evalGuess function', () => {

	const inputA = [1,2];
	const weightA = [3,4];
	const guessA = weightA[0] + weightA[1] * inputA[1];


	it('should return a number', () => {
		assert(typeof evalGuess(inputA, weightA) == 'number');
	});

	it('should throw an error if the input is not an array', () => {
		let testPassed = false;

		try {
			evalGuess("A String", weightA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	});

	it('should throw an error if the input is not a single dimensional array', () => {
		let testPassed = false;

		try {
			evalGuess([[]], weightA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if the input is not an array of numbers', () => {
		let testPassed = false;

		try {
			evalGuess(["A String"], weightA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	});

	it('should throw an error if the weightArr is not an array', () => {
		let testPassed = false;

		try {
			evalGuess(inputA, "A String");
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if the weightArr is not a single dimensional array', () => {
		let testPassed = false;
		
		try {
			evalGuess(inputA, [[]]);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if the weightArr is not an array of numbers', () => {
		let testPassed = false;

		try {
			evalGuess(inputA, ["A String"]);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if one of the arguments are missing', () => {
		let testPassed = false;
		
		try {
			evalGuess(inputA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct value', () => {
		assert(evalGuess(inputA, weightA) == guessA);
	})
})