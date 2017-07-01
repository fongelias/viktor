import { evalGuess } from '../evalGuess/evalGuess';


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