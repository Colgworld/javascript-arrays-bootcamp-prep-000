var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles',
  ];


function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  array;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  array;
}

function destructivelyAddElementEndOfArray(array, element) {
  array.pop(element);
  array;
}
