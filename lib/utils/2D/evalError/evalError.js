import { evalGuess } from '../evalGuess/evalGuess';


/** 
Returns an error value from inputs and weights
@param {array[numbers]} inputArr - An array representing the values to be evaluated, with the y value in the [0] position
@param {array[numbers]} weightArr - An array representing the weights to be used with the values, with b0 in the [0] position
@return {number} Sum of errors using the weightArr
*/
export function evalError(inputArr, weightArr) {

	if(!Array.isArray(inputArr[0]) || typeof inputArr[0][0] != 'number') {
		throw new Error('A value in inputArr is not an array');
	} 

	return inputArr.reduce((prev, curr, i) => {
		if(!Array.isArray(curr) || typeof curr[0] != 'number') {
			throw new Error('A value in inputArr is not an array of numbers');
		}

		if(Array.isArray(prev)) {
			prev = prev[0] - evalGuess(prev, weightArr);
		}

		curr = curr[0] - evalGuess(curr, weightArr);

		return prev + curr;
	})
}