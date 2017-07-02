/** 
Returns the position x in a sigmoid curve
@param {number} x - An x value along the sigmoid curve
@return {number} y - The y value corresponding to the provided x value
*/
export function sigmoidCurve(x) {
	return 1 / (1 + Math.pow(Math.E, -x));
}