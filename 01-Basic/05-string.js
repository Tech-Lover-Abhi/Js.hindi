const name = "Abhijit"
const repoCount = 50

console.log(name + " " + repoCount);


//* Backticks (string intorpulation)
console.log(`Hellow my name is ${name} and my scor is ${repoCount}`);


//* string declaration 

const gameName = new String('Abhijit Nayak abhi kalia');
console.log(gameName);

console.log(gameName[2]);
console.log(gameName.__proto__);


//* print the character length
console.log(gameName.length);

//* convert to capital later
console.log(gameName.toUpperCase());

//* In this index number which character is avalibale
console.log(gameName.charAt(5));

//* At which index number in this alphabet avaliable
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 7)
console.log(newString);

const anotherString = gameName.slice(-13, 8)
console.log(anotherString);


const str1 = "     Abhijit     "
const TRIM = str1.trim()
console.log(TRIM);
console.log(str1);
console.log(str1.trim());


//* Replace the unwanted object
const New2 = "Https://abhijit.google.com/abcde%20fghij"

console.log(New2.replace('%20', '___'));

//* Asking for string
console.log(New2.includes('jit')); // True : Fulse

console.log(gameName.split(' '));

