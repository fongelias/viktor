# [Viktor](https://fongelias.github.io/viktor)
Javascript Machine Learning Library.

[![Build Status](https://travis-ci.org/fongelias/viktor.svg?branch=master)](https://travis-ci.org/fongelias/viktor)

## Installation
Viktor is available as an NPM module
```
npm install --save viktor
```

## Documentation
Documentation for Viktor can be found at [here](https://fongelias.github.io/viktor)

## Examples
Examples of Viktor in use:
[MNIST](https://github.com/fongelias/viktor/blob/master/examples/MNIST/MNIST.md)

## Developer's Notes
### Features/Implementation
#### Neural Networks
Neural Networks are implemented using the [stones](https://github.com/fongelias/stones/) library's [Matrix](https://github.com/fongelias/stones/blob/master/lib/matricies/Matrix/Matrix.js) object, and currently supports configuration of nodes and the learning rate. The current network defaults to the Softmax model and a sigmoid activation function as it was built to be optimized for MNIST.

### Future Direction
As there are many ways to build neural networks, the next version of viktor will include more models and activation functions. Then, performance optimizations using GPU computation will be next, followed by Network wrappers to allow optimization of learning rates during training
