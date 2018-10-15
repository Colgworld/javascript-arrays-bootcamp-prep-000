var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles',
  ];


function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}

function destructivelyAddElementEndOfArray(array, element) {
  array.pop(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(array);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(array);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
