var pattern = /\w+/g,
	string = "how we survive,      is what makes us who we, are";

console.log(string.split(/[\s,]+/));

var pattern2 = /\w+/g,
	string = "how we survive, is what makes us who we are",
	match;

while (match = pattern2.exec(string))
{
	console.log(match);
	console.log(match[0] + "(Index: " + match.index + ")")
}

var pattern3 = /(\w+)@(\w+\.\w+)/g,
	string = "how we survive dewendsewes@gmail.com , is what makes us who we are",
	match;

while (match = pattern3.exec(string))
{
	console.log("Name: " + match[1] + ", Domain: " + match[2]);
}