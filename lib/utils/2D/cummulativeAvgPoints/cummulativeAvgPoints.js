export function cummulativeAvgPoints(input, cummulativeAvg = 0, cummulativeN = 0) {
	if(typeof input == 'number') {
		return (input + cummulativeAvg * cummulativeN) / (cummulativeN + 1);
	}

	if(Array.isArray(input) && Array.isArray(input[0])) {
		throw new Error('Array is more than one dimension');
	}

	if((cummulativeAvg != 0 || cummulativeN != 0) && (cummulativeAvg == 0 || cummulativeN == 0)) {
		throw new Error('cummulativeN and cummulativeAvg cannot be applied as arguments individually');
	}

	return (input.reduce((p, c) => p + c) + cummulativeAvg * cummulativeN) / (cummulativeN + input.length);
}