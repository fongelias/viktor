/** 
Returns the SSE (sum of squared errors) for a 2D coordinate array
@param {array} pointArr - An array containing a set of coordinate points
@param {object} lineObj - An object containing the b1 and b0 weights for an OLS regression
@return {number} A number representing the SSE of the points in pointArr given the line specified by lineObj
*/
export function sumSquaredErrors(pointArr, lineObj) {
	return pointArr.reduce(function(prev, curr, i) {
		if (Array.isArray(prev)) {
			prev = Math.pow(lineObj.b1 * prev[0] + lineObj.b0 - prev[1], 2);
		}

		const actualY = lineObj.b1 * curr[0] + lineObj.b0;

		return prev + Math.pow(actualY - curr[1], 2);
	})
}