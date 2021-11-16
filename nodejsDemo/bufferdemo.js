var buf = new Buffer(10);
var buf = new Buffer([10, 20, 30, 40, 50]);
var buf = new Buffer("Simply Easy Learning", "utf-8");




buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+  len);