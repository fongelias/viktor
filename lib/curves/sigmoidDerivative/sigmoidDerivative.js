/** 
Returns the position x in a derivative sigmoid curve
@param {number} x - An x value along the derivative sigmoid curve
@return {number} y - The y value corresponding to the provided x value
*/
export function sigmoidDerivative(x) {
	return x * (1 - x);
}
