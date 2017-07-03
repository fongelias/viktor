

/** 
Returns a new set of weights
@param {array[numbers]} weightArr - An array of numbers representing estimated weights, with b0 in the [0] position
@param {array[numbers]} input - An array of numbers representing the original inputs in some way, with y in the [0] position
@param {number} error - A number representing an error value pointing in the direction of the next gradient step
@param {number} learningRate - A number representing the magnitude of change in the weights
@return {array} A new set of weights
*/
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