//простые переменные 

var number = 2525,
	string = "some string",
	bool = true,
	mynull = null,
	myundef = undefined;

console.log(number);
console.log(string);
console.log(mynull);
console.log(myundef);

console.log(typeof number);
console.log(typeof string);
console.log(typeof mynull);
console.log(typeof myundef);

//объектные типы

var obj = {name: "dewen"},
	array =[1, 2, 5],
	regexp = /w+/g,
	func = function(){};

console.log("");
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(func);

obj.name = "dewen another";
array[1] = 123456;

console.log(array);

console.log(string.toUpperCase());
console.log(string);

var a,b,c,d;
a = b = c = d =5;

console.log(a);
console.log(b);
console.log(c);
console.log(d);