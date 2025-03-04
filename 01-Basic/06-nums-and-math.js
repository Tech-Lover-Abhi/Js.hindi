const score = 400;
// console.log(score);


// In this place you define which type of data type you want using (new) key word
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // 3

// which length of number you neded
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966

// which length of number you neded
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// USA format
// console.log(hundreds.toLocaleString()); // 1,000,000
// INDIA format
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000




//******************************* Maths ********************************/

// console.log(Math);

// convert nagative nymber to positive 
// console.log(Math.abs(-4)); // 4

// convert the round figar number
// console.log(Math.round(6.6)); // 7
// console.log(Math.round(6.4)); // 6

// Always round figher the higher number
// console.log(Math.ceil(4.2)); // 5
// Always round figher the lower number
// console.log(Math.floor(4.2)); // 4

// Always found the lower value
// console.log(Math.min(2,8,1,9)); // 1
// Always found the higher value
// console.log(Math.max(2,8,1,9)); // 9


console.log(Math.random());
//It is the proces you control the starting number (1) is the control point
console.log((Math.random() * 10 ) + 1); // 2.364665546549 (Random Number)
// Gives output 1 digit number
console.log(Math.floor(Math.random() * 10) + 1); // 6 (Random Number)

// This proces your output is 2 digit number 
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 16,15,18 (Random Number)










