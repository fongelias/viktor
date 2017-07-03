import assert from 'assert';
import { arraysEqual } from 'stones';


import { sumSquaredErrors } from './sumSquaredErrors';


describe('An sumSquaredErrors function', () => {

	const lineObj = {
		b0: 0,
		b1: 0,
	}
	const testInput = [
		[1,1],
		[-2,-2],
		[3,3],
	]

	it('should return a number', () => {
		assert(typeof sumSquaredErrors(testInput, lineObj) == 'number');
	})

	it('should return the squared distances of each point from the input line', () => {
		assert(sumSquaredErrors(testInput, lineObj) == 14);
	})

})
