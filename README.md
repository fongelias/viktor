# tensor
TensorFlow implemented in Javascript

[![Build Status](https://travis-ci.org/fongelias/tensor.svg?branch=master)](https://travis-ci.org/fongelias/tensor)

## Process
### MNIST example
[MNIST](http://yann.lecun.com/exdb/mnist/) is a database of handwritten digits. We will use this data to train our first example of machine learning in tensor. (This tutorial is essentially a clone of [this tutorial](https://www.tensorflow.org/get_started/mnist/beginners) and is created for our js implementation TensorFlow.)

#### MNIST Data
The [MNIST dataset in CSV format](https://pjreddie.com/projects/mnist-in-csv/) is what we'll be using for our example. We will be using a subset of the data that is created using the command:
`head -10000 mnist_train.csv > mnist_train_10000.csv`

Each row starts with the label, then the pixel data for the original image of the handwritten number. We will be generating a target array from the label, as well as an input array from the rest of the line.

#### Training

