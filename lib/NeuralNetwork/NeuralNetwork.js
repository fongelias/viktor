import { Matrix, RandomGaussianGenerator, multiplyMatricies, arrayToMatrix } from 'stones';
import { sigmoidCurve, sigmoidDerivative } from '../curves';

export class NeuralNetwork {

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

	copy() {
		let networkCopy = new NeuralNetwork(this.inputNodes, this.hiddenNodes, this.outputNodes, this.learningRate);
		networkCopy.inputToHiddenMatrix = this.inputToHiddenMatrix.copy();
		networkCopy.hiddenToOutputMatrix = this.hiddenToOutputMatrix.copy();

		return networkCopy;
	}


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