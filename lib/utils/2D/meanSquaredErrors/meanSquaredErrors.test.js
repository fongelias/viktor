import assert from 'assert';
import { arraysEqual } from 'stones';


import { meanSquaredErrors } from './meanSquaredErrors';


describe('An meanSquaredErrors function', () => {

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
		assert(typeof meanSquaredErrors(testInput, lineObj) == 'number');
	})

	it('should return the mean squared distance of each point from the input line', () => {
		assert(meanSquaredErrors(testInput, lineObj) == 14 / 3);
	})

})
