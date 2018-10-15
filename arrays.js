var chocolateBars= [];

function addElementToBeginningOfArray(chocolateBars, moreChocolateBars) {
  var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

  var moreChocolateBars = 'reeses';
  chocolateBars.unshift(moreChocolateBars);
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, moreChocolateBars) {
  var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

  var moreChocolateBars = 'reeses';
  chocolateBars.unshift(moreChocolateBars);
  return chocolateBars
}

function addElementToEndOfArray() {

}

function destructivelyAddElementEndOfArray(chocolateBars, moreChocolateBars) {
  var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

  var moreChocolateBars = 'reeses';
  chocolateBars.push(moreChocolateBars);
  return chocolateBars
}
