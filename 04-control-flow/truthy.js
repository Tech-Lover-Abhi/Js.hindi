// node 04-control-flow/truthy.js

// const userEmail = "Abhi@gmail.com";
const userEmail = [];

if (userEmail) {
    console.log("Go to user email");
} else {
    console.log("Don't have user email");
}

//! falsy value 
//* false, 0, -0, BigInt, "", null, undefined, NaN, 0n


//! truthy value
//* true, 1, -1, " ", [], {}, function() {}, "0", "false", "null", "undefined", "NaN", "0n"


//* Empty array check
// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }


//* Empty object check
const user = {};
if (Object.keys(user).length === 0) {
    console.log("Object is empty");
    
}