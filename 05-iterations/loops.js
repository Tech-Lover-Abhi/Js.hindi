// node 05-iterations/loops.js

//*  for loop
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let name = "I LOVE JAVASCRIPT";
for (let i = 0; i <= 100; i++) {
    const element = i;
    if(element % 2 === 0){
        // console.log(element,"I LOVE JAVASCRIPT");
    }

    // console.log(element);
    
}

for (let i = 1; i <= 100; i++) {
    // console.log(`Multiplection count: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i, j);
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        // console.log(i + '*' + j + '=' + i * j); // 2*2=4 ( create a multiplication table)
        
    }
    
}


let myArray = ["flash", "arrow", "superman", "batman",]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element, i); // flash 0, arrow 1, superman 2, batman 3
}



//* break and continue

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        // console.log("Detected 5");
        // break; // break the loop
        continue; // skip the value (5) (continue the loop) 
    }
    // console.log(`Value of i is ${i}`);
}


//************************ while loop ***********************************/

//* while loop

let i = 0;
while (i <= 10) {
    // console.log(`Value of i is ${i}`);
    // i++;
    i = i + 2;
}

let  myArray2 = ["flash", "arrow", "superman", "batman",]

let j = 0;
while (j < myArray2.length) {
    // console.log(`Value of j is ${myArray2[j]}`);
    j++;
} 


//************************ do while loop ***********************************/

//* do while loop

let k = 1;

do {  // do while loop always run at least one time
    // console.log(`Value of k is ${k}`);
    k++;
} while (k <= 10); 


//************************ for of loop ***********************************/

["", "", ""] // array under holed string
[{}, {}, {}] // array under holed object

//* for of loop

const array = [1, 2, 3, 4, 5];
for (const num of array) {
    // console.log(num);
}

const greeting = "Hello World";
for (const greet of greeting) {
    if(greet === " "){ // If he found any space
        // continue; // skip the space
        break; // break the loop
    }
    // console.log(`Each character is: ${greet}`);
}

const obj = {
    name: "John",
    age: 25,
    city: "New York"
}

for (const key of Object.keys(obj)) { // Object.keys(obj) is used for print the key
    // console.log(key);
}

//************************ for in loop *************************************/

// used for array
let forIn = ["flash", "arrow", "superman", "batman"]

for (const key in forIn) { // key is access both index number and value
    // console.log(`Index number id ${key} and value is ${forIn[key]}`); // ${forIn[key]} is used for print the value
    
}



//************************ map ***********************************/

//* map

const map = new Map();
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
// map.set('IN', "India")  // It will not add the same key again

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value); // Logs each key-value pair as an array [key, value]
}


//* for in loop in map (Not recommended)
// for (const key in map) {
//     console.log(key);
// }

//* for of loop in object
const myObj = {
    game1 : 'NFS',
    game2 : 'GTA',
    game3 : 'PUBG'
}

// for (const [key, value] of myObj) { //! It is not iterable
    // console.log(key, ":-", value); // Logs each key-value pair as an array [key, value]
// }

for (const key in myObj) {
    let newObj = myObj[key];// For print the value
    // console.log(key, ":-", newObj); // print the key and value
}

//* for in loop in array
const programming = ["js", "python", "java", "c++"];

for (const key in programming) {
    // console.log(`Index is ${key} and value is ${programming[key]}`); //* print the index and value
    // console.log(key);
    // console.log(programming[key]);
    // console.log(programming);
    
}



//************************ forEach ***********************************/

//* forEach

const coding = ["js", "python", "java", "c++"];

//* Normal function ( callback function ) [ 1-way ]
// coding.forEach(function(item) {
//     console.log(item);
// })


//* Array function ( callback function ) [ 2-way ]
// coding.forEach( (item) => {
//     console.log(item);
// })


//* Function refferance parametor [ 3-way ]
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(`Language name is ${item.languageName} and file name is :- ${item.languageFileName}`);
})
