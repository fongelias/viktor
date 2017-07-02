export function gradientStep(weightArr, input, error, learningRate) {

	if(!(weightArr && input && error && learningRate)) {
		throw new Error('an argument is missing');
	}

	if(!Array.isArray(input)) {
		throw new Error('input argument is not an array');
	}

	if(typeof error != 'number' || typeof learningRate != 'number') {
		throw new Error('either error argument or learningRate is not a number');
	}


	return weightArr.map((val, i) => {

		if(typeof val != 'number' || typeof input[i] != 'number') {
			throw new Error('a value in weightArr or input is not a number');
		}



		return i == 0 ? 
			val + error * learningRate :
			val + error * input[i] * learningRate;
	})
}