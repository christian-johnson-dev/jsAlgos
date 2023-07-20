//? Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
const r = "stoop";
const s = "Opus";
const t = "soup";

//We want to see if the same occurances of characters are equal.
// compare lengths return false for inequality
// convert to lowercase
// convert to an array
// sort them
// join them back into a string
// check equality

const isValidAnagram = (string1, string2) => {
  // compare lengths for early return
  if (string1.length !== string2.length) {
    return false;
  } //! cost: O(1)

  const newString1 = string1.toLowerCase().split("").sort().join(""); //! cost: O(n log n)
  const newString2 = string2.toLowerCase().split("").sort().join(""); //! cost: 0(n log n)

  return newString1 === newString2; //! cost: O(1)
};

console.log(isValidAnagram(s, t));
console.log(isValidAnagram(r, s));
