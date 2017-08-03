import { sumPoints, avgPoints, sumSquaredResiduals } from '../../utils';
import { interceptOLS } from '../interceptOLS/interceptOLS';

/**
Returns an object representing the ordinary least squares line
@return {object} An object representing a line
*/
export function ols_regression(pointArr) {
	let lineObj = {};

	const sum = sumPoints(pointArr);
	const avg = avgPoints(pointArr, sum);
	lineObj.b1 = sumSquaredResiduals(pointArr, avg);
	lineObj.b0 = interceptOLS(lineObj, avg);

	return lineObj;
}