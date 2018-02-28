const _ = require('underscore');
const {randomIndex, addData}  = require('./generatorFunctions/seed.js');

test('randomIndex when passed a string should return undefined', () => {
  expect(randomIndex('hello')).toBe(undefined);
});

test('randomIndex when passed a length should return a random number within the range of the length', () => {
  let val = 9;
  let range = _range(val);
  let randomNumberWithinRange = randomIndex(val);
  let isInTheRange = false;
  if(range.includes(randomNumberWithinRange)){
    isInTheRange = true;
  }
  expect(isInTheRange).toBe(true);
});