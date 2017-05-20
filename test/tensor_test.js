var assert = require('assert');
var Tensor = require('../lib/tensor.js');

describe("Tensor", function() {

	var test_shape = [[[1,2,3]],[[1,2,3]]];
	var tensor_test = new Tensor(test_shape);


	describe("tensor.shape()", function() {
		it("returns array with sized dimensions of tensor", function() {
			assert(tensor_test.shape() == [2,1,3]);
		})
	});
	describe("tensor.numElements()", function() {
		it("returns int of elements in tensor", function() {
			assert(tensor_test.numElements() == 6);
		})
	});
	describe("tensor.numDimensions()", function() {
		it("returns int of dimensions of tensor", function() {
			assert(tensor_test.numDimensions() == 3);
		})
	});
})