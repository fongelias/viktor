import { Matrix, RandomGaussianGenerator, multiplyMatricies, arrayToMatrix } from 'stones';
import { sigmoidCurve, sigmoidDerivative } from '../curves';



/**
Class representing a Neural Network
*/
export class NeuralNetwork {

	/**
	Create a NeuralNetwork
	@constructor
	@param {Int} inputNodes - The number of input nodes
	@param {Int} hiddenNodes - The number of hidden nodes
	@param {Int} outputNodes - The number of output nodes
	@param {Int} learningRate - The learning rate for training
	*/
	constructor(inputNodes, hiddenNodes, outputNodes, learningRate) {
		if(!inputNodes || !hiddenNodes || !outputNodes || !learningRate) {
			throw new Error('NeuralNetwork: an argument is missing');
		}

		//General Properties
		this.inputNodes = inputNodes;
		this.hiddenNodes = hiddenNodes;
		this.outputNodes = outputNodes;
		this.learningRate = learningRate;

		//Matricies
		this.inputToHiddenMatrix = new Matrix(hiddenNodes, inputNodes);
		this.hiddenToOutputMatrix = new Matrix(outputNodes, hiddenNodes);

		//Utilities
		this.randGen = new RandomGaussianGenerator().next;


		//Randomize Matricies
		this.inputToHiddenMatrix = this.inputToHiddenMatrix.map(() => this.randGen());
		this.hiddenToOutputMatrix = this.hiddenToOutputMatrix.map(() => this.randGen());

	}

	/**
	Returns a copy of the NeuralNetwork
	@return {NeuralNetwork} A NeuralNetwork object
	*/
	copy() {
		let networkCopy = new NeuralNetwork(this.inputNodes, this.hiddenNodes, this.outputNodes, this.learningRate);
		networkCopy.inputToHiddenMatrix = this.inputToHiddenMatrix.copy();
		networkCopy.hiddenToOutputMatrix = this.hiddenToOutputMatrix.copy();

		return networkCopy;
	}


	/**
	Train the NeuralNetwork
	@param {array[number]} inputArr - A single dimensional array of number inputs
	@param {array[number]} targetArr - A single dimensional array of numbers representing expected outputs
	@return {object} An object containing properties representing errors between the Network's output and target outputs and errors in the hidden node layer
	*/
	train(inputArr, targetArr) {
		//Use Weights to make a guess
		let evalResults = this.eval(inputArr);
		
		//Calculate Error
		const targetMatrix = new Matrix(arrayToMatrix(targetArr,targetArr.length, 1));
		const errors = targetMatrix.copy().subtract(evalResults.outputMatrix);
		
		//Calculate Hidden Errors
		const hiddenOutputMatrix_transposed = this.hiddenToOutputMatrix.copy().transpose();
		const hiddenErrors = new Matrix(multiplyMatricies(hiddenOutputMatrix_transposed.matrix, errors.matrix));
		
		//Calculate Gradients
		const gradient = evalResults.outputMatrix.map(sigmoidDerivative).hadamardProduct(errors).multiply(this.learningRate);
		const hiddenGradient = evalResults.hiddenOutputMatrix.map(sigmoidDerivative).hadamardProduct(hiddenErrors).multiply(this.learningRate);
		
		//Calculate Change in Outputs
		const hiddenToOutputChange = gradient.copy().multiply(evalResults.hiddenOutputMatrix.copy().transpose());
		const inputToHiddenChange = hiddenGradient.copy().multiply(evalResults.inputMatrix.copy().transpose());
		
		//Update weights
		this.hiddenToOutputMatrix.add(hiddenToOutputChange);
		this.inputToHiddenMatrix.add(inputToHiddenChange);


		return {
			errors,
			hiddenErrors,
		};
	}

	/**
	Evaluate inputs based on the current state of the NeuralNetwork
	@param {array[number]} inputArr - A single dimensional array of number inputs
	@return {object} An object containing matricies representing the input, hidden node outputs, and final outputs
	*/
	eval(inputArr) {
		let inputMatrix = new Matrix(arrayToMatrix(inputArr,inputArr.length, 1));

		let hiddenOutputMatrix = new Matrix(multiplyMatricies(this.inputToHiddenMatrix.matrix, inputMatrix.matrix));
		hiddenOutputMatrix = hiddenOutputMatrix.map(sigmoidCurve);

		return {
			inputMatrix,
			hiddenOutputMatrix,
			outputMatrix : new Matrix(multiplyMatricies(this.hiddenToOutputMatrix.matrix, hiddenOutputMatrix.matrix)).map(sigmoidCurve),
		};

	}
}