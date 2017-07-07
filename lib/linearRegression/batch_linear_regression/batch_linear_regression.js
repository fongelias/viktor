import { avgPoints } from '../../utils';
import { evalError } from '../../utils';
import { gradientStep } from '../../utils';




export function batch_linear_regression(inputArr,
								  initialWeights, 
								  iterations = 100,
								  adjustmentFunc = (val) => val * 0.1, 
								  adjustmentStart = 1) {
	//State
	let weights = initialWeights || Array(inputArr[0].length).fill(0);
	let n = 0;
	let avg = avgPoints(inputArr);
	let adjustmentArr = Array(inputArr[0].length).fill(adjustmentStart);
	let errorHistory = [];

	//Regression
	for(var i = 0; i < iterations; i++) {
		let errorVal = evalError(inputArr, weights);
		let newWeights = gradientStep(weights, avg, errorVal, adjustmentArr);

		let newErrorVal = evalError(inputArr, newWeights);

		if(Math.abs(newErrorVal) > Math.abs(errorVal)) {
			//console.log("Adjusting learning rate down at " + i);
			adjustmentArr = adjustmentArr.map(val => adjustmentFunc(val));
			errorHistory.push(errorVal);
		} else {
			weights = newWeights;
			errorHistory.push(newErrorVal);
		}
	}

	return {
		weights,
		errorHistory,
		error: evalError(inputArr, weights),
	}
}
