//* Singleton

//* Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhijit",
    "full name": "Abhijit Nayak",
    // reffors fimble []
    [mySym]: "key1",
    age: 21,
    location: "odisha",
    email: "ABhijit5245@abc.in",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//* This process you access the object key and value
console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

console.log(JsUser);
//*this process you overwride or re-declar the object key value
JsUser.age = "25"
//*This process you have freeze your object after that you can't re-declar your object key value
// Object.freeze(JsUser)
// In that point the re-declar mathod is not work
JsUser.age = "30"

console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello js user");
}

//* (this) key-word is call the main object
JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//********************************* part 2 **************************************/

//* single turn object
const tinderUser1 = new Object ()
//* non-single turn object // declar new type of object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Abhi"
tinderUser.isloggedIn = false

console.log(tinderUser);
console.log(typeof tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhijit",
            lastname: "Nayak"
        }
    }
}
//* Access tha nasted object
console.log(regularUser.fullname.userfullname.firstname);

//* mourje object
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj3 = {5: "e",6: "f"}
//* {} this is a target for store all the object and (obj1, obj2) is a source for send tha data in target
// const obj3 = Object.assign({}, obj1, obj2)
//* Morje many Object ( sprad mathod ) Ex--{...obj1, ...obj2, ...obj3, Etc}
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

//* type of ( API ) design
const users = [
    {
        id: 1,
        email: "A@gimal.com"
    },
    {
        id: 2,
        email: "n@gmail.com"
    },
    {
        id: 3,
        email: "b@gmail.com"
    }
] 

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//* convert every object to a group of array
console.log(Object.entries(tinderUser)); //* [ [ 'id', '123abc'], [ 'name', 'abhi'], [ 'isloggedIn', false] ]

//* this process you asking this object this name of property is avalible or not
console.log(tinderUser.hasOwnProperty('isloggedIn')); //* true : false ?



//************************************************** part-3 *************************************************/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// This is tha process to write a clean program
//* This process you have de-structor any key name ( : [de-structor] name)
const {courseInstructor: instructor} = course
console.log(instructor);
