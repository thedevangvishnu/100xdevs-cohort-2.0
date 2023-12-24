/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // if it's an empty string
  if (str.length === 0) {
    return true;
  }

  // remove punctuations from the string
  const punctuationsRegex = /[!?.,]/g;
  let newString = str.replace(punctuationsRegex, "");
  newString = newString.replaceAll(" ", "").toLowerCase();

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

module.exports = isPalindrome;
