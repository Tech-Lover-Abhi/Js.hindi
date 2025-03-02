
// Stack-memoreLocation (Primitive) ********** Heap-memoreLocation(NoN-primitiv)

// primitiv

let myYoutubeName = "Hitasabhi"

let anothername = myYoutubeName
anothername = "chaiorcode"

console.log(myYoutubeName);
console.log(anothername);

//NoN-primitiv

let userOne = {
    Email: "abhi.456@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.Email = "Abhijit@google.com"
console.log(userOne.Email);
console.log(userTwo.Email);