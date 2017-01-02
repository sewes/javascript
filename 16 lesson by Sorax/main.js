// throw "hello"

//var myError = new Error("my error message");
//console.log(myError.name);
//console.log(myError.message);
//throw myError;

console.log(" ");

var 
	cal = function(n)
{
	if (n > 10) throw new Error("n should be less then 10");
	return n + 10;
};

//cal(20);

try
{
	cal(20);
}
catch (e) 
{
	console.log("can't execute calculate: " + e.massage);
}
