import assert from 'assert';
import { arraysEqual } from 'stones';


import { balanceMagnitudeArray } from './balanceMagnitudeArray';


describe('A balanceMagnitudeArray function', () => {


	const weightArrA = [100, 10, 4, 5];
	const errorValA = 100;
	const inputArrA = [1000, 10, 5, 5];
	const magnitudeArrA = [-1,-1,0,0];


	it('should return an array', () => {
		assert(Array.isArray(balanceMagnitudeArray(inputArrA, weightArrA, errorValA)))
	})

	it('should throw an error if one of the inputs are missing', () => {
		let testPassed = false;

		try {
			balanceMagnitudeArray(inputArrA, weightArrA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct magnitudes', () => {
		assert(arraysEqual(balanceMagnitudeArray(inputArrA, weightArrA, errorValA), magnitudeArrA))
	})


})




