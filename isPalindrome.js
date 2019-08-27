// Write a function that takes a string and returns true if the string is a palindrome.  It returns false if it is not.
//javascript
function isPalindrome(str) {
  return (
    str ==
    str
      .tolowercase()
      .split("")
      .reverse()
      .join("")
  );
}
