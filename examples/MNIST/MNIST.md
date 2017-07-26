### MNIST example
[MNIST](http://yann.lecun.com/exdb/mnist/) is a database of handwritten digits. We will use this data to train our first example of machine learning in tensor. (This tutorial is essentially a clone of [this tutorial](https://www.tensorflow.org/get_started/mnist/beginners) and is created for our js implementation TensorFlow.)

#### MNIST Data
The [MNIST dataset in CSV format](https://pjreddie.com/projects/mnist-in-csv/) is what we'll be using for our example. We will be using a subset of the data that is created using the command:
`head -10000 mnist_train.csv > mnist_train_10000.csv`

Each row starts with the label, then the pixel data for the original image of the handwritten number. The label represents the handwritten number, which is a digit from 0-9.

#### Training
The NeuralNetwork takes the input and targets as arrays. We will be generating a target array from the label, as well as an input array from the rest of the line.

The target array will be filled with zeros and ones, where a one at a certain index means that we expect the input image to represent the digit equal to that index.

Training takes ~3.5 minutes per 1000 inputs, and I recommend running it through the whole 10000 inputs to get more accurate results.

#### Understanding the results
After training, I can run NeuralNetwork.eval() with an input array as an argument, and the network will return an object containing the results.

The following output comes from testing the 4th input in the training set, which has a label of 1:

`Matrix$$1 {
  matrix: 
   [ [ 0.000001341332635927462 ],
     [ 0.20458741930744773 ],
     [ 0.07501297935977473 ],
     [ 0.02961945068678462 ],
     [ 0.00005279409598804754 ],
     [ 0.07914993581490092 ],
     [ 0.000004594810675575221 ],
     [ 0.05443241339366632 ],
     [ 0.019806966326193772 ],
     [ 0.12159913090324341 ] ] }`

The values in the matrix represent un-normalized probabilities of what the digit can be. As you can see, the highest value is at index = 1 as expected, signifying that the trained network expects the value given the input matrix to equal 1.


