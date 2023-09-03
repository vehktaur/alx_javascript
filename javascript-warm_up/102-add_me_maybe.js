#!/usr/bin/node

const addMeMaybe = (number, theFunction) => {
  number++;
  theFunction(number);
};

exports = { addMeMaybe };
