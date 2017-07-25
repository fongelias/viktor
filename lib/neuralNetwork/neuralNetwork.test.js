import assert from 'assert';
import { arraysDeepEqual, Matrix } from 'stones';


import { NeuralNetwork } from './neuralNetwork';


describe('A NeuralNetwork Class', () => {


	const networkWithEqualWeights = (inputNodes, hiddenNodes, outputNodes, weight = 1) => {
		let network = new NeuralNetwork(inputNodes ,hiddenNodes, outputNodes, 0.1);
		network.inputToHiddenMatrix = network.inputToHiddenMatrix.map(() => weight);
		network.hiddenToOutputMatrix = network.hiddenToOutputMatrix.map(() => weight);

		return network;
	}



	describe('#constructor()', () => {

		it('should throw an error if there is a missing argument', () => {
			let testPassed = false;

			try {
				//Missing final argument
				let neuralNetwork = new NeuralNetwork(1,2,3);
			} catch(e) {
				testPassed = true;
			}

			assert(testPassed);
		})

		it('should initialize random values for inputToHiddenMatrix property', () => {
			const warning = "This test has a chance of systematically failing. Please run again in the case of failure";

			let matrixA = new NeuralNetwork(4,3,2,0.1).inputToHiddenMatrix;
			let matrixB = new NeuralNetwork(4,3,2,0.1).inputToHiddenMatrix;

			assert(arraysDeepEqual(matrixA, matrixB), warning);
		})

		it('should initialize random values for hiddenToOutputMatrix property', () => {
			const warning = "This test has a chance of systematically failing. Please run again in the case of failure";

			let matrixA = new NeuralNetwork(4,3,2,0.1).hiddenToOutputMatrix;
			let matrixB = new NeuralNetwork(4,3,2,0.1).hiddenToOutputMatrix;

			assert(arraysDeepEqual(matrixA, matrixB), warning);
		})
	});



	describe('#copy()', () => {
		it('should return a NeuralNetwork', () => {
			const network = new NeuralNetwork(4,3,2,0.1);

			assert(network.copy() instanceof NeuralNetwork);
		})

		it('should return a new NeuralNetwork with the same properties', () => {
			const network = new NeuralNetwork(4,3,2,0.1);
			const networkCopy = network.copy();

			const networksAreDifferent = network != networkCopy;
			const propertiesAreTheSame = network.inputNodes == networkCopy.inputNodes &&
									network.hiddenNodes == networkCopy.hiddenNodes &&
									network.outputNodes == networkCopy.outputNodes &&
									network.learningRate == networkCopy.learningRate &&
									arraysDeepEqual(network.inputToHiddenMatrix, networkCopy.inputToHiddenMatrix) &&
									arraysDeepEqual(network.hiddenToOutputMatrix, networkCopy.hiddenToOutputMatrix);

			assert(networksAreDifferent && propertiesAreTheSame);
		})
	})



	describe('#train()', () => {

		const inputA = [1,2,3,4,5,6];
		const targetA = [0,0,0,0,0,1];



		it('should alter weights based on the inputs', () => {
			let neuralNetwork = new NeuralNetwork(6,4,6,0.1);
			const inputToHidden = neuralNetwork.copy().inputToHiddenMatrix.matrix;
			const hiddenToOutput = neuralNetwork.copy().hiddenToOutputMatrix.matrix;

			neuralNetwork.train(inputA, targetA);
			

			assert(!arraysDeepEqual(inputToHidden, neuralNetwork.inputToHiddenMatrix.matrix) &&
				   !arraysDeepEqual(hiddenToOutput, neuralNetwork.hiddenToOutputMatrix.matrix))
		})

		it('should return the object', () => {
			let neuralNetwork = new NeuralNetwork(6,2,6,0.1);

			assert(neuralNetwork.train(inputA,targetA) == neuralNetwork);
		})

	})



	describe('#eval()', () => {

		const neuralNetwork = networkWithEqualWeights(2,2,3);
		const inputArr = [1,2];
		const result = neuralNetwork.eval(inputArr);
		const expectedOutputMatrix = [ 
			[ 0.8704730975500355 ],
     		[ 0.8704730975500355 ],
     		[ 0.8704730975500355 ], 
     	];


		it('should return an object', () => {
			assert(result instanceof Object);
		})

		it('should include an inputMatrix matrix as a property in the returned object', () => {
			assert(result.inputMatrix instanceof Matrix);
		})

		it('should include an hiddenOutputMatrix matrix as a property in the returned object', () => {
			assert(result.hiddenOutputMatrix instanceof Matrix);
		})

		it('should include an outputMatrix matrix as a property in the returned object', () => {
			assert(result.outputMatrix instanceof Matrix);
		})

		it('should return the expected output given weights in the network', () => {
			assert(arraysDeepEqual(result.outputMatrix.matrix, expectedOutputMatrix));
		})
	})
})