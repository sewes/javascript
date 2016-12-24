var s = "gg";
if (s) {
	console.log("it's true");
};

var a = 0,
	isTrue = true;
isTrue && (a = 5);
console.log(a);

var someString = "1";
var newString = someString || "2";
console.log(newString);
