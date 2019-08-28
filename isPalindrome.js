// Write a function that takes a string and returns true if the string is a palindrome.  It returns false if it is not.
//javascript
isPalindrome = str => {
  return (
    str ==
    str
      .split("")
      .reverse()
      .join("")
  );
};
isPalindrome("racecar"); //returns true
isPalindrome("good"); //returns false

const isPal2 = str => {
  for (let i = 0; i <= str.length / 2; i++) {
    //added the /2 here because you only need to go half way through the string, since you're comparing both sides towards the middle :)
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log("cat should be false", isPal2("cat"));
console.log("mom should be true", isPal2("mom"));
console.log("racecar should be true", isPal2("racecar"));
