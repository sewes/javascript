var counter = (function()
{
	var count = 0;
	return function()
	{
		return count++;
	}
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log("function wich num");

var counter1 = (function()
{
	var count1 = 0;
	return function(num)
	{
		count = num !== undefined ? num : count;
		return count++;
	}
}());

console.log(counter1(500));
console.log(counter1());
console.log(counter1());
console.log(counter1(35));
console.log(counter1());
console.log(counter1(10));
console.log(counter1());
console.log(counter1());