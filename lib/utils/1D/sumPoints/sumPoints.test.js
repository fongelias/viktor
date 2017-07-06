import assert from 'assert';
import { arraysEqual } from 'stones';


import { sumPoints } from './sumPoints';


describe('An sumPoints function', () => {

	const testInputA = [
		[1,2],
		[3,4],
		[5,6],
	];
	const testSumA = [1+3+5, 2+4+6];
	const testInputB = [
		[1,2,7],
		[3,4,8],
		[5,6,9],
	]
	const testSumB = [1+3+5, 2+4+6, 7+8+9];

	it('should return an array', () => {
		assert(Array.isArray(sumPoints(testInputA)));
	})

	it('should return sum of coordinates from a 2D coordinate input', () => {
		assert(sumPoints(testInputA), testSumA);
	})

	it('should return the sum of coordinates from an input with more than 2 coordinates', () => {
		assert(sumPoints(testInputB), testSumB);
	})

})