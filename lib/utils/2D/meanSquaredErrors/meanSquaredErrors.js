import { sumSquaredErrors } from '../sumSquaredErrors/sumSquaredErrors';

/** 
Returns the MSE of a 2D coordinate array
@param {array} pointArr - An array containing all coordinate points
@param {object} lineObj - An object containing the b1 and b0 weights for an OLS regression
@return {number} A number representing the MSE of a 2D coordinate array
*/
export function meanSquaredErrors(pointArr, lineObj) {
	return sumSquaredErrors(pointArr, lineObj) / pointArr.length;
}