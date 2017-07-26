//Dependencies
var viktor = require('../../viktor');
var fs = require('fs');

//Variables
var trainingData;
var testData;
var neuralNetwork = new viktor.NeuralNetwork(784,262,10,0.1);
var trainingIndex = 0;


//Functions
function readFile(fileName) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fileName, 'utf8', function(err, data) {
			if (err) {
				console.log(err);
				reject(err);
			}

			resolve(data);
		});
	})
}

function train() {
	var trainingEntry = trainingData[trainingIndex].slice();
	trainingIndex++;

	var targets = new Array(10).fill(0);
	targets[trainingEntry.shift()] = 1;


	neuralNetwork.train(trainingEntry, targets);
}





//Read the file, then train the network with the data. This takes ~3.5 minutes per 1000 inputs
readFile('examples/MNIST/data/train/mnist_train_10000.csv').then(function(data) {
	//Format data into an array
	trainingData = data.split('\n');
	trainingData = trainingData.map(function(val) {
		return val.split(',');
	});

	//Train the network
	for(var i = 0; i < trainingData.length; i++) {
		train();
	}

	//Log input target and results
	console.log(trainingData[3][0]);
	console.log(neuralNetwork.eval(trainingData[3].slice(1)).outputMatrix);
});






