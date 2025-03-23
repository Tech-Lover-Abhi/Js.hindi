// node switch.js

//* Switch statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//* switch statement with number
const month = 3;

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break; // break is important to stop the execution
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
} //* output: march


//* switch statement with string
const day = "tuesday"

switch (day) {
    case "sunday":
        console.log("sunday");
        break;
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "thursday":
        console.log("thursday");
        break;
    case "fryday":
        console.log("fryday");
        break;
    case "saterday":
        console.log("saterday");
        break;

    default:
        console.log("Not found");
        break;
}