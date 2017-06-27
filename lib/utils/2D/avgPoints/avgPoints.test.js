import assert from 'assert';
import { arraysEqual } from 'stones';

import { avgPoints } from './avgPoints';



describe('An avgPoints function', () => {

	const pointArr = [
		[1,2],
		[1,4],
		[4,6],
		[6,12]
	];
	const pointSums = [12,24];
	const actualAvg = [3,6];


	it('should return an array', () => {
		assert(Array.isArray(avgPoints(pointArr, pointSums)));
	})

	it('should return the average of coordinate pairs from the input', () => {
		assert(arraysEqual(avgPoints(pointArr, pointSums), actualAvg));
	})

	it('should return integrate with sumPoints() when pointSums arg is not supplied', () => {
		assert(arraysEqual(avgPoints(pointArr), actualAvg));
	})
})