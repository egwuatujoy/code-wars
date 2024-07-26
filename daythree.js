// Write a function which converts the input string to uppercase.

function strUppercase(str) {
  return str.toUpperCase();
}
console.log(strUppercase("Hello"));

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function iniTial(fullname) {
  return fullname.slice(0, 1).toUpperCase() + "." + fullname.split(" ")[1].slice(0, 1).toUpperCase();
}

console.log(iniTial("joy egwuatu"));
console.log(iniTial("Chioma Peter"));
console.log(iniTial("Victor Moses"));

