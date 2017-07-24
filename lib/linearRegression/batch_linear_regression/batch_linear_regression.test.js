import assert from 'assert';


import { batch_linear_regression } from './batch_linear_regression';


describe('A batch_linear_regression function', () => {


	const inputA = [
		[100, 50, 50],
		[10, 5, 5],
		[9, 4.5, 4.5],
		[90, 2, 88],
		[76, 70, 6],
		[131, 130,1],
		[25, 2, 23],
		[46, 46, 0],
		[88, 46, 42],
		[1, 0.5, 0.5],
	];

	const resultA = {
		weights: [ 0.026908488556801467, 0.9579421926221323, 0.5919867482496322 ],
		errorHistory: [ 
			576,
			576,
			576,
			576,
			-433.3593600000003,
			326.0422480896005,
			-245.301145772692,
			184.55477003354267,
			-138.85162678243623,
			104.46640992603382 
		],
		error: 104.46640992603382,
	}

	it('should return an object', () => {

		assert(typeof batch_linear_regression(inputA, null, 10) == 'object');
	})

	it('should return an object with weights, change in error over time, and final error', () => {
		const regressionResult = batch_linear_regression(inputA);
		const hasWeights = Array.isArray(regressionResult.weights) ? true : false;
		const hasErrorOverTime = Array.isArray(regressionResult.errorHistory) ? true : false;
		const hasFinalError = typeof regressionResult.error == 'number' ? true : false;

		assert(hasWeights && hasErrorOverTime && hasFinalError);
	})

	it('should work on an array with more than 2 values', () => {

		assert.deepEqual(batch_linear_regression(inputA, null, 10, (val) => val * 0.1), resultA);
	})

	it('should result in the same result when given the same arguments', () => {
		assert.deepEqual(batch_linear_regression(inputA, null, 12, (val) => val * 0.1, 1),batch_linear_regression(inputA, null, 12));
	})

	it('should return different results when the starting weights are different', () => {
		assert.notDeepEqual(batch_linear_regression(inputA, [100,1,1], 12),batch_linear_regression(inputA, null, 12));
	})

})








