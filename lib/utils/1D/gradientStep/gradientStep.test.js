import assert from 'assert';
import { arraysEqual } from 'stones';


import { gradientStep } from './gradientStep';


describe('A gradientStep function', () => {

	const weightsA = [1,2];
	const inputA = [3,4];
	const errorA = 2;
	const learningRateA = 0.5;
	const newWeightsA = [2,6];

	it('should return an array', () => {
		assert(Array.isArray(gradientStep(weightsA, inputA, errorA, learningRateA)));
	})

	it('should throw an error if weightArr is not an array', () => {
		let testPassed = false;

		try {
			gradientStep("A String", inputA, errorA, learningRateA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if a value in weightArr is not a number', () => {
		let testPassed = false;

		try {
			gradientStep([1, "A String"], inputA, errorA, learningRateA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if input is not an array', () => {
		let testPassed = false;

		try {
			gradientStep(weightsA, "A String", errorA, learningRateA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if a value in input is not a number', () => {
		let testPassed = false;

		try {
			gradientStep(weightsA, [1, "A String"], errorA, learningRateA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if error is not a number', () => {
		let testPassed = false;

		try {
			gradientStep(weightsA, inputA, "A String", learningRateA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if learningRate is not a number', () => {
		let testPassed = false;

		try {
			gradientStep(weightsA, inputA, errorA, "A String");
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if an argument is missing', () => {
		let testPassed = false;

		try {
			gradientStep(weightsA, inputA, learningRateA);
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct value', () => {
		assert(arraysEqual(gradientStep(weightsA, inputA, errorA, learningRateA), newWeightsA));
	})
})