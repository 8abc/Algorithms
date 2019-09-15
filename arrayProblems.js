//Open up the console

//write a function printReverse() that takes an array as an argument
// and prints out the element in the array in reverse order
//dont actually reverse the array itself
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([3, 1, 5, 8, 2]);
//ES6
const printReverse = arr => {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

//write a function isUniform() which takes an array as an arguement
// and returns true if all elements in the array are identical
function isUniform(arr) {
  var first = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

// const isUniform = arr => {
//   var first = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] !== first) {
//       return false;
//     }
//   }
//   return true;
// };

//write a function sumArray() that accepts an array of numbers
//and returns the sum of all numbers in the array
function sumArray(arr) {
  let total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}
//write a function max() that accepts an array of numbers
//and returns the maximum number in the array
function max(arr) {
  let max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
