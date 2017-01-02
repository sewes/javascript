var Person =
{
	constructor: function(name, age, gender)
	{
		this.name = name;
		this.age = age;
		this.gender = gender;
		return this;
	},
	greet: function()
	{
		console.log("hi, my name is " + this.name + ", age = " + this.age
		+ ", my gender is " + this.gender);
	}
};

var person, secondPerson, thirdPerson;
person = Object.create(Person).constructor("dewen", 35, "male");
secondPerson = Object.create(Person).constructor("sewes", 25, "female");
thirdPerson = Object.create(Person).constructor("farra", 21, "female");

console.log(person.name);
console.log(secondPerson.age);
console.log(thirdPerson.gender);

console.log(" ");

person.greet();
secondPerson.greet();
thirdPerson.greet();

console.log(Person.isPrototypeOf(person));

var WebDeveloper = Object.create(Person);

WebDeveloper.constructor = function(name, age, gender, skills)
{
	Person.constructor.apply(this, arguments);
	this.skills = skills || [];
	return this;
};
WebDeveloper.develop = function() 
{
	console.log("Working...");
};

console.log(" ");

var developer = Object.create(WebDeveloper).constructor("hero", 25, "male", ["html","css", "js", "php"]);
developer.develop();
console.log(developer.skills);
console.log(developer.name);
developer.greet();
console.log(developer);
