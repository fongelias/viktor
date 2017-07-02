# tensor
TensorFlow implemented in Javascript

[![Build Status](https://travis-ci.org/fongelias/tensor.svg?branch=master)](https://travis-ci.org/fongelias/tensor)
[![Coverage Status](https://coveralls.io/repos/github/fongelias/tensor/badge.svg?branch=master)](https://coveralls.io/github/fongelias/tensor?branch=master)

## Process
### MNIST example
[MNIST](http://yann.lecun.com/exdb/mnist/) is a database of handwritten digits. We will use this data to train our first example of machine learning in tensor. (This tutorial is essentially a clone of [this tutorial](https://www.tensorflow.org/get_started/mnist/beginners) and is created for our js implementation TensorFlow.)

#### Flatten
First, we will transform our data into something that can more easily be processed. In this case, we will transform the image sets into a tensor. 

#### Train
To train our model, we will use [Softmax Regression](http://ufldl.stanford.edu/tutorial/supervised/SoftmaxRegression/). The model will process an image and give probabilities of being each digit (0-9).

Softmax has two steps: adding up evidence of our input being in certain classes, then converting that evidence into probabilities (through a weighted sum).

Evidence can be represented as the sum of the product of weights and their inputs, plus some bias.


#### Test
#### Validate



## Definitions
Term | Definition
--- | ---
MNIST | database of handwritten digits
Tensor | geometric object describing linear relations between vectors/scalars/tensors.
Softmax Regression | Multinomial logistic regression, generalization of logistic regression that can be used for multi-class classification.

