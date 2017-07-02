import { sumPoints } from '../sumPoints/sumPoints';


/** 
Returns the average of x values and y values in a 2 dimensional array
@param {array} pointArr - An array containing all coordinate points
@param {array} pointSums - An array containing the computed sum of all x values and all y values
@return {array} An array containing the average x value and y value of the pointArr
*/
export function avgPoints(pointArr, pointSums) {
	if(!pointSums) {
		pointSums = sumPoints(pointArr);
	}

	return [pointSums[0] / pointArr.length, pointSums[1] / pointArr.length];
}