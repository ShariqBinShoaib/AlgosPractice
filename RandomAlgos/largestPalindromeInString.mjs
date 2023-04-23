import isPalindrome from "./isPalindrome.mjs";

function findLargestPalindromeInString(str) {
  let largestPalindrome = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j > i + 1; j--) {
      const subString = str.substring(i, j);
      if (
        isPalindrome(subString) &&
        subString.length > largestPalindrome.length
      ) {
        largestPalindrome = subString;
      }
    }
  }

  return largestPalindrome;
}

const largestPalindrome = findLargestPalindromeInString(
  "1234356789870123454321"
);

console.log(largestPalindrome);
