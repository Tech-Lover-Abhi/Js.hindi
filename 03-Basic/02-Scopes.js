//* Global scope

let a = 300
// var c = 30
// console.table([a, b, c]);

//* Block scope
if (true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
    //* don't used var key wored
    // var c = 30
}

//console.log(a); // print both block scop and global scope

//************* Nastad function *******************/

//* start
function one() {
    const username = "Abhijit"
    // console.log(username);
    
    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);
    
    //* execute two function
    two()
}

//* Execute one
one()

//* end

if (true){
    const username = "Abhijit"
    if (username === "Abhijit") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);   
}

// console.log(username);



// ++++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++

//* Declaration one 
console.log(addone(5)) // you have declar the function abobe and bellow the function [ it is the right way ]
function addone(num){
    return num + 1
}

//* Declaration two (  swaing error )
//addtwo(5) // you can't declar the function above(^) the function [ it swaing error ]
let addtwo = function(num){
    return num + 2
}

// console.log(addtwo(5));


// node 03-Basic/02-Scopes.js
//+++++++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++++++/

const user = {
    username: "Abhijit",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // ( This. ) keyword reffors to corrent context/function
        console.log(this);

    }

}

user.welcomeMessage()
user.username = "Abhijit Das"
user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Abhi"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "Abhi"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Abhi"
    console.log(this.username);
}
// chai()


//* Basic arrow function ( Explectly return , [ used return function])
// const addthree = (num1, num2) => {
//         return num1 + num2;
// }

//* implesit return [ not used return function]
// const addthree = (num1, num2) => num1 + num2;

// const addthree = (num1, num2) => (num1 + num2);

const addthree = (num1, num2) =>  ({ username: "Abhijit"}) //* object return process


console.log(addthree(5, 5));



