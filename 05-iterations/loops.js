// node 05-iterations/loops.js

//*  for loop
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let name = "I LOVE JAVASCRIPT";
for (let i = 0; i <= 100; i++) {
    const element = i;
    if(element % 2 === 0){
        console.log(element,"I LOVE JAVASCRIPT");
    }

    console.log(element);
    
}

//* Nasted For loop
for (let i = 1; i <= 100; i++) {
    console.log(`Multiplection count: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i, j);
        console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        console.log(i + '*' + j + '=' + i * j); // 2*2=4 ( create a multiplication table)
        
    }
    
}


let myArray = ["flash", "arrow", "superman", "batman",]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element, i); // flash 0, arrow 1, superman 2, batman 3
}



//* break and continue

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log("Detected 5");
        // break; // break the loop
        continue; // skip the value (5) (continue the loop) 
    }
    console.log(`Value of i is ${i}`);
}


//************************ while loop ***********************************/

//* while loop

let i = 0;
while (i <= 10) {
    console.log(`Value of i is ${i}`);
    // i++;
    i = i + 2;
}

let  myArray2 = ["flash", "arrow", "superman", "batman",]

let j = 0;
while (j < myArray2.length) {
    console.log(`Value of j is ${myArray2[j]}`);
    j++;
} 


//************************ do while loop ***********************************/

//* do while loop

let k = 1;

do {  // do while loop always run at least one time
    console.log(`Value of k is ${k}`);
    k++;
} while (k <= 10); 


//************************ for of loop ***********************************/

["", "", ""] // array under holed string
[{}, {}, {}] // array under holed object

//* for of loop

const array = [1, 2, 3, 4, 5];
for (const num of array) {
    console.log(num);
}

const greeting = "Hello World";
for (const greet of greeting) {
    if(greet === " "){ // If he found any space
        // continue; // skip the space
        break; // break the loop
    }
    console.log(`Each character is: ${greet}`);
}

const obj = {
    name: "John",
    age: 25,
    city: "New York"
}

for (const key of Object.keys(obj)) { // Object.keys(obj) is used for print the key
    console.log(key);
}

//************************ for in loop *************************************/

// used for array
let forIn = ["flash", "arrow", "superman", "batman"]

for (const key in forIn) { // key is access both index number and value
    console.log(`Index number id ${key} and value is ${forIn[key]}`); // ${forIn[key]} is used for print the value
    
}



//************************ map() ***********************************/

//* map

const map = new Map();
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
// map.set('IN', "India")  // It will not add the same key again

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value); // Logs each key-value pair as an array [key, value]
}


//* for in loop in map (Not recommended)
for (const key in map) {
    console.log(key);
}

//* for of loop in object
const myObj = {
    game1 : 'NFS',
    game2 : 'GTA',
    game3 : 'PUBG'
}

for (const [key, value] of myObj) { //! It is not iterable
    console.log(key, ":-", value); // Logs each key-value pair as an array [key, value]
}

for (const key in myObj) {
    let newObj = myObj[key];// For print the value
    console.log(key, ":-", newObj); // print the key and value
}

//* for in loop in array
const programming = ["js", "python", "java", "c++"];

for (const key in programming) {
    console.log(`Index is ${key} and value is ${programming[key]}`); //* print the index and value
    // console.log(key);
    // console.log(programming[key]);
    // console.log(programming);
    
}



//************************ forEach() ***********************************/

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
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
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


const coding1 = ["js", "python", "java", "c++"];

//* forEach does not return anything (undefined) [ can't store the value in a variable ]

// const values = coding1.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values); // undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myNums.filter( (num) => {
//     const element = num > 4;
//     console.log(element);
// })

const newNums = myNums.filter( (num) => {
    return num > 4; // return the value which is greater than 4
});
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


const newNums2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; // string
const newNums1 = []; // empty array (store the value which is greater than 4)
newNums2.forEach( (num) => { // forEach loop (newNums2 is an array) (forEach is a method) (=> is a arrow function) (num is a parameter) 
    if(num > 4){
        // newNums1.push("Greater than 4");
        newNums1.push(num); // push the value which is greater than 4
    }
})
console.log(newNums1); // [ '5', '6', '7', '8', '9', '10' ]


//************************ filter() ***********************************/

//* filter
//* Real world example in database
const books = [ // array of object // type od database output
    {title: "Book One", genre: "Fiction", pages: 1981, edition: 9104},
    {title: "Book Two", genre: "Math", pages: 1997, edition: 2004},
    {title: "Book Three", genre: "Fiction", pages: 2009, edition: 9504},
    {title: "Book Four", genre: "Logic", pages: 1998, edition: 2004},
    {title: "Book Five", genre: "History", pages: 1951, edition: 2003},
    {title: "Book Six", genre: "Non-Fiction", pages: 2007, edition: 9304},
    {title: "Book Seven", genre: "Fiction", pages: 1981, edition: 2004},
    {title: "Book Eight", genre: "Non-Fiction", pages: 1981, edition: 2004},
    {title: "Book Nine", genre: "History", pages: 2000, edition: 2009},
    {title: "Book Ten", genre: "Science", pages: 2999, edition: 9204}
];

// console.log(books);
const userBooks = books .filter( (bk) => bk.genre === 'History' ); // filter the value which is genre is History
console.log(userBooks);

const userBooks1 = books .filter( (bk) => {
    return bk.pages >= 2999 && bk.genre === "Science"; // return the value which is greater than 2000
} ); // {} is used for return the value which is greater than 2000
console.log(userBooks1);


//* start
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* map 
const newNumber = myNumbers.map( (num) => num + 10 ); // add 10 in each value
// console.log(newNumber);

//* forEach does not return anything (undefined) [ can't store the value in a variable ]
myNumbers.forEach( (num) => {
    // return num + 10; // add 10 in each value
    console.log(num + 10);
    return;
});

//*  end


//****************************** chaning **************************************/

//* start
const NewNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const NewNum1 = NewNum
                .map( (num) => num * 10 ) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] ( Asine the output lower function 2 )
                .map( (num1) => num1 + 1 ) // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101] ( Asine the output lower function 3 )
                .filter( (num2) => num2 >= 40) // [41, 51, 61, 71, 81, 91, 101] ( Asine the output lower function 4 )

console.log(NewNum1);

//* end


//************************************** Reduce() ***************************************/

//* start

//* Arrow function
//!             >, >, >, >
const array1 = [1, 2, 3, 4];

const initialValue = 0; //!        0, 1, 3, 6, 10  +  1, 2, 3, 4               
const sumWithInitial = array1.reduce( (accumulator, currentValue) => { // ( parametor1, parametor2 )
    console.log(`Accumulator:- ${accumulator} and CurrentValue:- ${currentValue}`); // print the current value
    let sum = accumulator + currentValue; //* [   0 + 1 = 1,     1 + 2 = 3,     3 + 3 = 6,     6 + 4 = 10   ]
    return sum; // return sumWithInitial
});

console.log(sumWithInitial); // 10



//* Nurmal function
//!             >, >, >, >, >
const array2 = [1, 2, 3, 4, 5]

const myTotal = array2.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and curr: ${currval}`); // print the current value
    return acc + currval; // add tho number
}, 0) // 0 is a initial value

console.log(myTotal); // 15



//* Arrow function 2

const myTotal1 = array1.reduce( (acc, curr) => { // function
    return acc + curr; // Add two number and return value
}, 0) // 0 is a initial value

console.log(myTotal1); // 10



//! Live Example By the help of shoppingCart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 1999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => { // function
    return acc + item.price; // Sum two number
}, 0) // initial value
console.log(priceToPay); // 18996 ( total amount )


//* end