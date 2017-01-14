var months = ["j", "f", "m", "a"];

months[4] = "may";

console.log(months);
console.log(months.length);

months[months.length] = "june";
console.log(months);

months[15] = "something";
console.log(months);
console.log(months.length);

console.log("");

var array = ["some string", "another string", "third string"];

console.log(array);
console.log(array.join(" || "));
console.log(array.reverse());
console.log(array);

console.log(array.sort());
console.log(array.concat("hello", ["even more", "string"]));
console.log(array.splice(1, 1, "dewen", "webdev"));
console.log(array);

var array1 = ["ss", "pp", "ee", "ff"];
array1.push("js");
console.log(array1);
array1.unshift("se");
console.log(array1);

console.log(array1.pop());
console.log(array1.pop());
console.log(array1.pop());
console.log(array1);

console.log(array1.shift());
console.log(array1);
