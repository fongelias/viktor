import assert from 'assert';
import { arraysEqual, arraysDeepEqual } from 'stones';



import Tensor from './tensor';



describe("Tensor", function() {

	//Nomenclature: test_shape[dimensions][case]
	const test_shape0A = 5;
	const test_shape0B = false;
	const test_shape1A = [4,5,6];
	const test_shape2A = [[1,3,9],[5,10,15]];
	const test_shape3A = [[[1,2,3]],[[1,2,3]]];

	let tensor_test;


	describe("#shape()", () => {
		it("returns array with sized dimensions of 3D tensor", () => {
			const tensor = new Tensor(test_shape3A);
			assert(arraysEqual(tensor.shape(), [2,1,3]));
		})

		it("returns empty array for 0D tensor", () => {
			const tensor = new Tensor(test_shape0A);
			const shape = tensor.shape();
			assert(arraysEqual([], []));
		})

	});

	describe("#numElements()", () => {
		it("returns int of elements in tensor", () => {
			const tensor = new Tensor(test_shape3A);
			assert(tensor.numElements() == 6);
		})
	});

	describe("#numDimensions()", () => {
		it("returns int of dimensions of tensor", () => {
			const tensor = new Tensor(test_shape3A);
			assert(tensor.numDimensions() == 3);
		})
	});
})





