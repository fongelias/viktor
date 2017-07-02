/** 
Returns the intercept for a line of an Ordinary Least Squares regression
@param {object} lineObj - An object containing at least a b1 property with the value of the expected slope
@param {array} avg - An array containing a y value at [1] and an x value at position [0]
@return {number} An expected intercept value
*/
export function interceptOLS(lineObj, avg) {
	return avg[1] - lineObj.b1 * avg[0];
}