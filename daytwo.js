// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveArr(array) {
  let txt = 0;

  for (let arr of array) {
    if (arr > 0) {
      txt += arr;
    }
  }
  return txt;
}

console.log(positiveArr([10, -2, 40]));
