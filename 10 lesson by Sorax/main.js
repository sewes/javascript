//if (выражение) инструкция

if (true) console.log("it's true");

var n = 5;

if (n > 3) 
{
	console.log(n);
	console.log("it's n");
} else 
{
	console.log("it's not n");
}

var name = "S", 
	homecity;

switch(name) 
{
	case "J": homecity = "Boston"; break;
	case "S": homecity = "Belgorod"; break;
	case "B": homecity = "LA"; break 
	default: homecity = "Moscow";
}

console.log(homecity);