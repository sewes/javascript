var Person, person, anotherPerson;

Person = function(name)
{
	this.name = name;
};

Person.prototype.greet = function()
{
	console.log("hello, my name is " + this.name);
};

person = new Person("dewen");
console.log(person.name);
person.greet();

anotherPerson = new Person("bruce");
console.log(anotherPerson.name);
anotherPerson.greet();

console.log(anotherPerson instanceof Person);
console.log(Person.prototype.isPrototypeOf(anotherPerson));

console.log(anotherPerson._proto_); 

console.log(" ");

Developer = function(name, skills)
{
	Person.apply(this, arguments);
	this.skills = skills || [];
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

developer = new Developer("dewen", ["ruby", "php", "python"]);
console.log(developer.name);
console.log(developer.skills);
developer.greet();

console.log(developer instanceof Developer);
console.log(developer instanceof Person);