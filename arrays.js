chocolateBars= [];

function addElementToBeginningOfArray(chocolateBars, moreChocolateBars) {
  var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

  // var moreChocolateBars = 'reeses';
  chocolateBars.unshift('reeses');
  return chocolateBars
}




function destructivelyAddElementToBeginningOfArray(chocolateBars2, moreChocolateBars2) {
  var chocolateBars2 = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

  var moreChocolateBars2 = 'reeses';
  chocolateBars2.unshift(moreChocolateBars2);
  return chocolateBars2
}




function addElementToEndOfArray(chocolateBars3, moreChocolateBars3) {
  var chocolateBars3 = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

  var moreChocolateBars3 = 'reeses';
  chocolateBars3.push(moreChocolateBars3);
  return chocolateBars3
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
