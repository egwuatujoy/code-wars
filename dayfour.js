//  question one
//  Remove String Spaces

function strJoin(str) {
  return str.split(" ").join("");
}

console.log(strJoin("hello joy hi a b"));

// question two
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// es6
const simpleMultiplication = (num) => (num % 2 === 0 ? num * 8 : num * 9);

console.log(simpleMultiplication(11));
let txt = "";

// normal js
function mulNum(num) {
  if (num % 2 === 0) {
    num = num * 8;
  } else {
    num = num * 9;
  }
  return num;
}

console.log(mulNum(10));

// question three

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}
