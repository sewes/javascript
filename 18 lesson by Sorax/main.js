var greet = function(greeting)
{
	return greeting + " hi! My name is " + this.name;
}

var person = 
{
	name: "jhon",
	greet: greet
};

var anotherPerson = 
{
	name: "bob",
	greet: greet
};

console.log(person.greet());
console.log(anotherPerson.greet());

console.log(anotherPerson.greet.call(person));

console.log(" ");

console.log(person.greet("hello!"));
console.log(anotherPerson.greet.call(person, "bonjour!"));
console.log(anotherPerson.greet.apply(person, ["bonjour!"]));