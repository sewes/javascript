var array = ["some string", "another string", "third string", "javascript", "dewen"];

array.forEach(function(element, index, array)
{
	console.log(element);
});

array.forEach(function(element, index, array)
{
	array[index] = element.toUpperCase();
});
console.log(array);

array.forEach(function(element, index, array)
{
	array[index] = element.toLowerCase();
});

var filtered = array.filter(function(e)
{
	return e.indexOf('o') === -1;
});
console.log(filtered);

console.log(array.every(function(e) {return e.lenth >4}));
console.log(array.some(function(e) {return e.indexOf('j') !== -1}));
console.log(array.some(function(e) {return e.indexOf('x') !== -1}));

var numbers = [1, 2, 3, 4, 3, 5, 6];

var reduced = numbers.reduce(function(a, b)
{
	return a + b;
});

var reduced1 = numbers.reduceRight(function(a, b)
{
	return Math.pow(a, b);
});

console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));
console.log(numbers.lastIndexOf(10));