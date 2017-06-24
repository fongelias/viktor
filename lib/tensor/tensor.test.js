import assert from 'assert';



import Tensor from './tensor';



describe("Tensor", function() {

	var test_shape = [[[1,2,3]],[[1,2,3]]];
	var tensor_test = new Tensor(test_shape);


	describe("#shape()", () => {
		it("returns array with sized dimensions of tensor", () => {
			assert(tensor_test.shape() == [2,1,3]);
		})
	});
	describe("#numElements()", () => {
		it("returns int of elements in tensor", () => {
			assert(tensor_test.numElements() == 6);
		})
	});
	describe("#numDimensions()", () => {
		it("returns int of dimensions of tensor", () => {
			assert(tensor_test.numDimensions() == 3);
		})
	});
})





