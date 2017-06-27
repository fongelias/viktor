import assert from 'assert';
import { arraysEqual } from 'stones';


import { sumSquaredResiduals } from './sumSquaredResiduals';


describe('An sumSquaredResiduals function', () => {

	const testInput = [
		[1,1],
		[2,2],
		[3,3],
		[4,4],
		[0,0],
	]

	it('should return a number', () => {
		assert(typeof sumSquaredResiduals(testInput, [2,2]) == 'number');
	})

	it('should return the sum of squared residuals of each point from the input', () => {
		assert(sumSquaredResiduals(testInput, [2,2]) == 1);
	})

	it('should integrate with the avgPoints function if avg not supplied', () => {
		assert(sumSquaredResiduals(testInput) == 1);
	})

})
