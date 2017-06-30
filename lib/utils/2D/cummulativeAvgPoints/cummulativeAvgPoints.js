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