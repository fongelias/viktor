import { factorOfTen } from 'stones';

/**
Returns an array of values that, when multiplied with variable, weight, and error arguments, 
will result in a value of the same magnitude as the result argument.
@param {array[number]} inputArr - an array of y and x values representing a potential input.
@param {array[number]} weightArr - an array of weights.
@param {number} error - the error associated with the current gradient step.
@return {array[number]} An array representing the power of 10 values that would balance results with the product of all other arguments
*/
export function balanceMagnitudeArray(inputArr, weightArr, error) {
	
	const resultMagnitude = factorOfTen(inputArr[0]);

	return weightArr.map((val,i) => {
		const inputs = (i == 0 ? val * error : val * error * inputArr[i]);
		const inputsMagnitude = factorOfTen(inputs);

		return resultMagnitude - inputsMagnitude;
	})
}

