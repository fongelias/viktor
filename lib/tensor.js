
/** Class representing a tensor */
class Tensor {

	/**
	Create a tensor
	@constructor
	@param {Int | Array} elements- The tensor's elements
	*/
	constructor(elements) {
		this.tensor = elements;
	}

	/**
	Returns shape of tensor, the sizes of each dimension
	@return {Array} The integer sizes of each dimension in an array
	*/
	shape() {

	}

	/**
	Returns the number of elements within the tensor
	@return {Int} An integer representing the number of elements
	*/
	numElements() {

	}

	/**
	Returns the number of dimensions of the tensor
	@return {Int} An integer representing the number of dimensions in the tensor
	*/
	numDimensions() {

	}
}

export default Tensor;
