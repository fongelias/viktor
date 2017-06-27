import assert from 'assert';


import { ols_regression } from './ols_regression';


describe('An ols_regression function', () => {
	
	const input = [
		[100,900],
		[500,800],
		[200,600],
		[100,600],
		[200,400],
		[100,500],
		[500,700],
		[500,700],
		[500,700],
		[500,700],	
	]


	it('should return an object', () => {
		assert(typeof ols_regression(input) == 'object');
	})

	it('should return an object with property b0 equal to the intercept of the fit line of inputs', () => {
		assert(ols_regression(input).b0 == 576.1904761904761);
	})

	it('should return an object with property b1 equal to the slope of the fit line of inputs', () => {
		assert(ols_regression(input).b1 == 0.2619047619047619);
	})

})


