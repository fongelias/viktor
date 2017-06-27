import assert from 'assert';


import { sigmoidCurve } from './sigmoidCurve';


describe('A sigmoidCurve function', () => {

	const atXZero = 0.5;
	const atXOne = 0.7310585786;

	it('should return correct value at a certain X (x=0)', () => {
		assert(sigmoidCurve(0) == atXZero);
	})

	it('should return correct value at a certain X (x=1)', () => {
		assert(sigmoidCurve(1).toFixed(10) == atXOne);
	})

	it('should not return an incorrect value at a certain X (x=0)', () => {
		assert(sigmoidCurve(0) != 0);
	})

})