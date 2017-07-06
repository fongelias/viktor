import { factorOfTen } from 'stones';

/**
Returns a value that, when multiplied with variable, weight, and error arguments, 
will result in a value of the same magnitude as the result argument.
@param {number} result - a y value, or the variable that the line is fitted to predict.
@param {number} variable - an x value.
@param {number} weight - the weight associated with the x value.
@param {number} error - the error associated with the current gradient step.
@return {number} An integer representing the power of 10 value that would balance result with the product of all other arguments
*/
export function balanceMagnitude(result, variable, weight, error) {
	if(typeof result != 'number' || typeof variable != 'number' || 
	   typeof weight != 'number' || typeof error != 'number') {
		throw new Error('balanceMagnitude: One of the arguments is not a number');
	}

	const resultMagnitude = factorOfTen(result);
	const inputsMagnitude = factorOfTen(variable * error * weight);

	return (resultMagnitude - inputsMagnitude);
}