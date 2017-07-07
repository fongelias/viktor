

/** 
Returns a new set of weights
@param {array[numbers]} weightArr - An array of numbers representing estimated weights, with b0 in the [0] position
@param {array[numbers]} input - An array of numbers representing the original inputs in some way, with y in the [0] position
@param {number} error - A number representing an error value pointing in the direction of the next gradient step
@param {array[number]} learningRateArr - An array of numbers representing the magnitudes of changes in the weights
@return {array} A new set of weights
*/
export function gradientStep(weightArr, input, error, learningRateArr) {

	if(!(weightArr && input && error && learningRateArr)) {
		throw new Error('gradientStep: an argument is missing');
	}

	if(!Array.isArray(input)) {
		throw new Error('gradientStep: input argument is not an array');
	}

	if(typeof error != 'number') {
		throw new Error('gradientStep: error argument is not a number');
	}


	return weightArr.map((val, i) => {

		if(typeof val != 'number' || typeof input[i] != 'number') {
			throw new Error('gradientStep: a value in weightArr or input is not a number');
		}



		return i == 0 ? 
			val + error * learningRateArr[i] :
			val + error * input[i] * learningRateArr[i];
	})
}