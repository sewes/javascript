console.log("for");

// for (инициализация; тест; инкремент) тело цикла

var i;
for (i = 0; i < 10; i++) 
 {
 	console.log(i);
 }

console.log("while");

// while (выражение) инструкция
var l = 0
while (l < 10) 
{
	console.log(l++);
}

console.log("do while");

// do инструкция while (выражение)

var s = 0;

do console.log(s++); while (s < 10);