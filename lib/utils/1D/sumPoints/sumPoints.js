/** 
Returns the sum of x values and y values in a 2 dimensional array
@param {array} pointArr - An array containing all coordinate points
@return {array} An array containing the sums of x values and y values of the pointArr
*/
export function sumPoints(pointArr) {
	return pointArr.reduce(function(prev, curr, i) {
		return prev.map((val, i) => val + curr[i]);
	});
}