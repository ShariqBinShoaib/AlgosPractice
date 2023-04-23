export default function isPalindrome(inputString) {
  for (let i = 0; i < Math.floor(inputString.length / 2); i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i])
      return false;
  }
  return true;
}
