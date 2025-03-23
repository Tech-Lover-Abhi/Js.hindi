// node 04-control-flow/one.js //! used cd 04-control-flow ( for change directory )
// node one.js


//* opperators in javascript
//* <, >, <=, >=, ==, ===, !=, !==, &&, ||, !
// < = lassthan
// > = greaterthan
// <= = less than or equal to
// >= = greater than or equal to
// == = double equal to
// != = not equal to
// === = triple equal to
// !== = not double equal to
// && = logical and operator
// || = logical or operator
// ! = logical not operator

//* IF Else statement

let temp = 50;
if (temp < 30) {
    console.log('It is cold outside');
    // return;
} else {
    console.log('It is not cold outside');
}
console.log('Execution completed');


//* statement checking
const score = 200;
if ( score > 100 ) {
    const power = "fly"
    console.log(`user power: ${power}`);
}
//* you can't access outer the scope/block 
console.log(`user power: ${power}`);


//* Impleset scope
const balance1 = 1000
if (balance1 > 500) console.log("test"), console.log("test2");  // not recomended in real world


//* nesting
const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("lass than 900");
} else {
    console.log("lass then 1200");
}


//* Logical operator example
const userLoggedIn = true;
const debitCard = true;
const userChoice = false;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

//* Logical AND operator (&&) (all condition must be true) (check multiple condition)
if (userLoggedIn && debitCard && userChoice) {
    console.log("You can purchase");
}

//* Logical OR operator (||) (any one condition must be true) (check multiple condition)
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("You are logged in");
}

//* Nullish Coalescing Operator (??): null or undefined 
let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 15; // 10 (left to right [ he found the first value which is not null or undefined ])
console.log(val1);


//* Ternary operator (condition ? true : false)
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea");

