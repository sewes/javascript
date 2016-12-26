function greet(name)
{
	console.log(arguments[3]);
	return "hello " + name;
};

console.log(greet("DeweN", 23, 45, 34).toLowerCase());

var func = function(callback)
{
	var name1 = "dewen hopeless";
	callback(name1);
};

func(function(n)
{
	console.log("hello " + n);
});