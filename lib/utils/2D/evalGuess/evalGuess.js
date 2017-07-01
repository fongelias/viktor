export function evalGuess(input, weightArr) {
	if(!Array.isArray(input) || Array.isArray(input[0]) || typeof input[0] != 'number') {
		throw new Error('input is not a single dimensional array of numbers');
	}

	if(!Array.isArray(weightArr) || Array.isArray(weightArr[0]) || typeof weightArr[0] != 'number') {
		throw new Error('weightArr is not a single dimensional array of numbers');
	}

	return weightArr.reduce((prev, curr, i) => {
		return prev + input[i] * curr;
	})
}