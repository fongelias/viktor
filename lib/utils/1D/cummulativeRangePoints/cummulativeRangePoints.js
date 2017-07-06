
/** 
Returns range of the given inputs and a previously calculated range
@param {number | array[numbers]} input - A number or array representing the values to be evaluated
@param {array[numbers]} cummulativeRange - A array representing the current range of values seen up until this point
@return {array} A range of the given inputs
*/
export function cummulativeRangePoints(input, cummulativeRange) {
	if(Array.isArray(input) && Array.isArray(input[0])) {
		throw new Error('cummulativeRangePoints: input has too many dimensions');
	}

	if(!cummulativeRange || !cummulativeRange[0] || !cummulativeRange[1]) {
		cummulativeRange = Array.isArray(input) ? [input[0], input[0]] : [input, input];
	} else {
		if(cummulativeRange.length != 2) {
			throw new Error('cummulativeRangePoints: cummulativeRange length != 2');
		}

		if(typeof cummulativeRange[0] != 'number' || typeof cummulativeRange[1] != 'number') {
			throw new Error('cummulativeRangePoints: values in cummulativeRange are not numbers');
		}
	}

	const testMinMax = (val) => [Math.min(cummulativeRange[0], val), Math.max(cummulativeRange[1], val)]

	if(typeof input == 'number') {
		return testMinMax(input);
	}
	
	input.forEach(val => { cummulativeRange = testMinMax(val) });

	return cummulativeRange;

}