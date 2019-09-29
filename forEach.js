//forEach is an easy way of iterating over an array
function myForEach(arr, func) {
  //loops through array
  for (var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }
}

var colors = ["black", "red", "white"];
myForEach(colors, alert);

//loops through colors and calls func each time we go through the array
myForEach(colors, function() {
  alert("HI");
});

Array.prototype.myForEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};
var friends = ["raf", "ed", "nuel", "des"];
friends.myForEach(alert);
friends.myForEach(function(name) {
  console.log(name + " is cool");
});
