import assert from 'assert';
import { arraysEqual } from 'stones';

import { avgPoints } from './avgPoints';



describe('An avgPoints function', () => {

	const pointArrA = [
		[1,2],
		[1,4],
		[4,6],
		[6,12]
	];
	const pointSumsA = [12,24];
	const actualAvgA = [3,6];
	const pointArrB = [
		[1,2,3],
		[1,4,3],
		[4,6,3],
		[6,12,3]
	];
	const pointSumsB = [12,24,12];
	const actualAvgB = [3,6,3];


	it('should return an array', () => {
		assert(Array.isArray(avgPoints(pointArrA, pointSumsA)));
	})

	it('should return the average of coordinate pairs from the input', () => {
		assert(arraysEqual(avgPoints(pointArrA, pointSumsA), actualAvgA));
	})

	it('should return the average of coordinate pairs from an input with more than 2 points per coordinate set', () => {
		assert(arraysEqual(avgPoints(pointArrB, pointSumsB), actualAvgB));
	})

	it('should return integrate with sumPoints() when pointSums arg is not supplied', () => {
		assert(arraysEqual(avgPoints(pointArrA), actualAvgA));
	})
})










