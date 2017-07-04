import assert from 'assert';


import { balanceMagnitude } from './balanceMagnitude';


describe('A balanceMagnitude function', () => {

	const resultA = 100;
	const variableA = 50;
	const weightA = 1;
	const errorA = 1000;
	const expectedMagnitude = -2;

	it('should return a number', () => {
		assert(typeof balanceMagnitude(resultA, variableA, weightA, errorA) == 'number');
	})

	it('should throw an error if one of the inputs is not a number', () => {
		let testPassed = false;

		try {
			balanceMagnitude(resultA, variableA, weightA, "A String");
		} catch (e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct answer', () => {
		assert(balanceMagnitude(resultA, variableA, weightA, errorA) == expectedMagnitude);
	})
})

