import assert from 'assert';


import { sigmoidDerivative } from './sigmoidDerivative';


describe('A sigmoidDerivative function', () => {

	const atXTwo = -2;
	const atXThree = -6;

	it('should return correct value at a certain X (x=2)', () => {
		assert(sigmoidDerivative(2) == atXTwo);
	})

	it('should return correct value at a certain X (x=3)', () => {
		assert(sigmoidDerivative(3).toFixed(10) == atXThree);
	})

})