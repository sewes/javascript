alert("well");

console.log(Math.pow(2,2));
console.log(Math.sqrt(400));
console.log(Math.abs(-300));

console.log(Math.round(9.6));

console.log(Math.floor(9.6));
console.log(Math.ceil(9.2));

console.log(Math.min(6, 9, 6,1));
console.log(Math.max(6, 9,4,5));

console.log(Math.exp(10));
console.log(Math.log(5));

console.log(Math.PI);
console.log(Math.cos(1));
console.log(Math.E);

console.log("random");

console.log(Math.random());

console.log(-10 + Math.random() * 20);

var getRandom = function(min, max)
{
	return Math.round(Math.random() * (max - min) + min);
};

console.log(getRandom(10, 20));
console.log(getRandom(-100, 100));