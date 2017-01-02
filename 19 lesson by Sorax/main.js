var person =
{
	name: "dewen",
	_age: 20,
	get age()
	{
		return this._age;
	},
	set age(value)
	{
		this._age = value < 0 ? 0 : value > 100 ? 100 : value;
	}
};

console.log(person.age);

console.log(" ");

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "gender",
{
	value: "male",
	writable: false,
	enumerable: false,
	configurable: false
});

console.log(person.gender);
person.gender = "female";
console.log(person.gender);

console.log(" ");
for (property in person)
{
	console.log(property);
}

console.log(Object.keys(person));

console.log(person.propertyIsEnumerable("gender"));

console.log(" ");

var obj = {};

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));

Object.seal(obj);
console.log(Object.isSealed(obj));

Object.freeze(obj);
console.log(Object.isFrozen(obj));