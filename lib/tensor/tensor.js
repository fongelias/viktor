
/** Class representing a tensor */
class Tensor {

	/**
	Create a tensor
	@constructor
	@param {Int | Bool | Array} obj- The tensor's elements as a multi-dimensional array filled with Integers or Booleans
	*/
	constructor(obj) {
		if (this.validate(obj)) {
			this.tensor = obj;
		} else {
			throw new Error("object is not a valid tensor");
		}
	}

	validate(obj) {
		return (
			Array.isArray(obj) ? 
			this.validate(obj[0]) : 
			(typeof obj == 'number' || typeof obj == 'boolean')
		);
	}

	/**
	Returns shape of tensor, the sizes of each dimension
	@return {Array} The integer sizes of each dimension in an array
	*/
	shape() {
		if(!this.shape) {


			return this.shape;
		} else {
			return this.shape;
		}
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
