/**
Class representing a tensor 
*/
export default class Tensor {

	/**
	Create a tensor
	@constructor
	@param {Int | Bool | Array} obj - The tensor's elements as a multi-dimensional array filled with Integers or Booleans
	*/
	constructor(obj) {
		if (this.validate(obj)) {
			this.tensor = obj;
		} else {
			throw new TypeError("object is not a valid tensor");
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
		if(!this.tensorShape) {
			this.tensorShape = this.computeShape(this.tensor);

			return this.tensorShape;
		} else {
			return this.tensorShape;
		}
	}

	computeShape(tensor) {
		let shape = [];

		if (Array.isArray(tensor)) {
			let currentDimension = tensor;

			for (var i = 0; i < this.numDimensions(); i++) {
				shape.push(currentDimension.length);
				currentDimension = currentDimension[0];
			}
		}

		return shape;
	}

	/**
	Returns the number of elements within the tensor
	@return {Int} An integer representing the number of elements
	*/
	numElements() {
		if(!this.elements) {

			this.elements = Array.isArray(this.tensor) ? this.countElements(this.tensor) : 1;
			return this.elements;
		} else {
			return this.elements;
		}
	}

	countElements(tensor) {
		return Array.isArray(tensor[0]) ? tensor.length * this.countElements(tensor[0]) : tensor.length;
	}

	/**
	Returns the number of dimensions of the tensor
	@return {Int} An integer representing the number of dimensions in the tensor
	*/
	numDimensions() {
		if(!this.dimensions) {
			this.dimensions = this.computeDimensions(this.tensor);

			return this.dimensions;
		} else {
			return this.dimensions;
		}
	}

	computeDimensions(tensor) {
		return Array.isArray(tensor) ? 1 + this.computeDimensions(tensor[0]) : 0;
	}
}
