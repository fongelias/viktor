

/** 
Returns average value of the given input and a previously calculated average
@param {number | array[numbers]} input - A number or array representing the values to be averaged
@param {number} cummulativeAvg - A value representing the current average of values seen up until this point
@param {number} cummulativeN - A value representing the number of values seen up until this point
@return {number} A weighted average 
*/
export function cummulativeAvgPoints(input, cummulativeAvg = 0, cummulativeN = 0) {
	//All input types
	if((cummulativeAvg != 0 || cummulativeN != 0) && (cummulativeAvg == 0 || cummulativeN == 0)) {
		throw new Error('cummulativeN and cummulativeAvg cannot be applied as arguments individually');
	}

	if(typeof cummulativeAvg != 'number' || typeof cummulativeN != 'number') {
		throw new Error('cummulativeN and cummulativeAvg must be numbers');
	}

	if(typeof input == 'number') {
		return (input + cummulativeAvg * cummulativeN) / (cummulativeN + 1);
	}

	//Array inputs
	if(Array.isArray(input) && Array.isArray(input[0])) {
		throw new Error('Array is more than one dimension');
	}

	return (input.reduce((p, c) => p + c) + cummulativeAvg * cummulativeN) / (cummulativeN + input.length);
}