// Write a function that takes an array of 
// numbers and returns the sum of the numbers.
//  The numbers can be negative or non-integer.
//   If the array does not contain any numbers 
//   then you should return 0.

// solution o
const inPut = [];

function sum(numbers) {
  "use strict";

  if (numbers.length === 0) {
    return 0;
  }
  let text = 0;

  for (let n of numbers) {
    text += n;
  }
  return text;
}

console.log(sum(inPut));
