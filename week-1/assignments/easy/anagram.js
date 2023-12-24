/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// spar ... rasp

function isAnagram(str1, str2) {
  // check for same length
  if (str1.length !== str2.length) {
    return false;
  }

  // remove spaces from strings, convert to lower case, sort them after spliting into array and then reconvert into string
  const newStr1 = str1.replace(" ", "").toLowerCase().split("").sort().join();
  const newStr2 = str2.replace(" ", "").toLowerCase().split("").sort().join();

  if (newStr1 === newStr2) {
    return true;
  } else return false;
}

module.exports = isAnagram;
