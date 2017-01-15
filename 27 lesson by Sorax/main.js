var date = new Date(1993, 3, 1, 11, 22, 653);
console.log(date);

console.log(date.getMilliseconds());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(" ");

console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getYear());
console.log(date.getFullYear());

date.setDate(15);
console.log(date);

console.log(date.getTime());

console.log(date.getUTCHours());

console.log(date.toTimeString());
console.log(date.toDateString());

console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

console.log(Date.now());