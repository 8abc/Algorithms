// Task: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Example: Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.
// ------------APPROACH----------------

// ------------Solution ------------------
function getMiddle(string) {
  var middleLetters = "";
  if (string.length % 2 === 0) {
    var even = string.length / 2;
    return string.slice(even - 1, even + 1);
  }
  if (string.length % 2 !== 0) {
    var odd = string.charAt(string.length / 2);
    return odd;
  }
}

//this returns one letter
function getMiddle(string) {
  var word = string.length;
  if (!isOdd(word)) {
    var middleLetter = Math.floor(word / 2);
    return string[middleLetter];
  } else isEven(word);
  return string.slice(even - 1, even + 1);
  //   return word[word.length / 2 - 1] + word[word.length / 2];
}

function isOdd(n) {
  if (n / 2 == 0) {
    return string[middleLetter];
  }
}

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
}

// Another way:
function getMiddle(string) {
  var wordLength = string.length;

  //   if the length of the word is odd
  if (!isEven(wordLength)) {
    //   divide the string by 2 --> round down
    // --> return the character at position of rounded down quotient
    var middleChar = Math.floor(wordLength / 2);
    console.log(string[middleChar]);
    return string[middleChar];
  } else {
    var middleCharNum = wordLength / 2;
    console.log(middleCharNum);

    var midChars = string[middleCharNum - 1];
    midChars += string[middleCharNum];
    console.log(midChars);
    return midChars;
  }
}

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
}
