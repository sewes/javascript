var person =
{
	name: "dewen",
	age: 24,
	gender: "male",
	sayHi: function()
	{
		return "hi";
	}
}

console.log(person.gender);
console.log(person.age);
console.log(person.name);

person.age = 25;
person.userID = 322228;

console.log(person);

console.log(person.sayHi());

var primerO = Object.create({x: 10, y: 20});
primerO.x = 20;
console.log(primerO);

delete primerO.x
console.log(primerO);

console.log("x" in primerO);
console.log("o" in primerO);
console.log(primerO.x);
console.log(primerO.o);

console.log(" ");

console.log(primerO.z);
console.log("z" in primerO);

console.log(" ");

primerO.z = undefined;
console.log(primerO.z);
console.log("z" in primerO);
