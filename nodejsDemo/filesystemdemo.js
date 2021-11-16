var fs = require("fs");  // this my dependecies

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});


// Synchronous read
var data = fs.readFileSync('input.txt'); //resource  for reading file
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");