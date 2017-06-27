import assert from 'assert';


import { interceptOLS } from './interceptOLS';


describe('An interceptOLS function', () => {

	const avg1 = [3.2, 6.6];
	const avg2 = [320, 660];
	const lineObj1 = { b1: 0.261904761904762, b0: 5.761904761904761 };
	const lineObj2 = { b1: 0.2619047619047619, b0: 576.1904761904761 };


	it('should generate the correct intercept based on inputs', () => {
		assert(interceptOLS(lineObj1, avg1) == lineObj1.b0);
	})

	it('should generate the correct intercept based on other inputs', () => {
		assert(interceptOLS(lineObj2, avg2) == lineObj2.b0);
	})
})

