//* write a normal function
function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("j");
    console.log("i");
    console.log("t");
}
//* [ sayMyName ] is a refferance name and [ () ] is call the function
// sayMyName()

// function sumNum(one,two){
//     sum = one + two;
//     console.log(sum);
// }


// function sumNum(one,two){
//     let sum = one + two;
//     return sum;
// }


function sumNum(one,two){
    return one + two;
}
const result = sumNum(5,10);
console.log("Result: ",result);

function loginUserMessage(username){
    //* check tha statment the user is enter there name or not if the user is not enter the name the aleart message is print forther the code will be execute
    if(username === undefined){
        console.log("Please enter your name");
        return;
    }
        return `${username} just logged in`
    
}
console.log(loginUserMessage());
console.log(loginUserMessage("Abhijit"));


//* in this statment when user are not enter the name the statment is by defoult set the name ( "Abhi" ) forther the user are enter her name the user name is overwride
function loginUserMessage1(username = "Abhi") {
    return `${username} just logged in`
}
console.log(loginUserMessage1());



//* Rest operator ( ...parametor)
function calculateCartPrice( ...num1) { // It convert the array format [200, 500, 900]
    return num1;
}
console.log(calculateCartPrice(200, 500, 900));

// start
//* Object pass process
let user = {
    username: "Abhijit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and cource price is ${anyobject.price}`);
}

//* Function refferance pass
handleObject(user) // Username is Abhijit and course price is 199

//* Direct object pass in Argument
handleObject({ // Username is Abhi and course price is 200
    username: "Abhi",
    price: 200
})


//* Array pass process
const myNewArray = [100, 300, 600, 900]; // index numbeer[0: 100, 1: 300, 2: 600, 3: 900]

function  returnSecondValue(getArray) {
    return getArray[3];
}
console.log(returnSecondValue(myNewArray)) // 900
//* Direct Array pass in Argument
// console.log(returnSecondValue([100, 300, 600, 900]));

// End

//* Function Expression
let val1 = 10 
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(result1, 30);

console.log(result1, "result1");
console.log(result2, "result2");

// node 03-Basic/01-Functions.js

