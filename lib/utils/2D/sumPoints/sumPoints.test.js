import assert from 'assert';
import { arraysEqual } from 'stones';


import { sumPoints } from './sumPoints';


describe('An sumPoints function', () => {

	const testInput = [
		[1,2],
		[3,4],
		[5,6],
	];

	it('should return an array', () => {
		assert(Array.isArray(sumPoints(testInput)));
	})

	it('should return sum of coordinates from a 2D coordinate input', () => {
		assert(sumPoints(testInput), [1+3+5, 2+4+6]);
	})

})