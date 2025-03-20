//* Dates


//* Date convorsion
let myDate = new Date()
console.log(myDate.toString(), "1"); // 
console.log(myDate.toISOString(), "2"); //
console.log(myDate.toJSON(), "3"); //
console.log(myDate.toLocaleDateString(), "4"); // 3/4/2025
console.log(myDate.toLocaleString(), "5"); //
console.log(myDate.toLocaleTimeString(), "6"); //
console.log(myDate.toTimeString(), "7"); // 
console.log(myDate.toUTCString(), "8"); // 
console.log(typeof myDate, "********"); //


//* own date declaration
const newDate = new Date(2023, 0, 23) //* in js month always start ( 0 )
console.log(newDate.toString());

//* own date and time declaration
const myNewDate = new Date(2023, 0, 23, 5, 3, 45)//*(1023) is year, (0) is month, (23) is date, (5) is hour, (3) is minute, (45) is second
console.log(myNewDate.toLocaleString());

// const yymmdd =  new Date("2023-01-14") //* yy-mm-dd (2023-01-14)
const yymmdd = new Date("01-14-2025") //* mm-dd-yy (01-14-2025)
console.log(yymmdd.toLocaleString());
console.log(yymmdd.getTime(), "1"); //* convert milisecond

//* Time stamp for mili second
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(Math.floor(Date.now()/1000)); //* convert 

//*Abstract date
const NewDate = new Date()
console.log(NewDate);
console.log(NewDate.getMonth() + 1);
// console.log(NewDate.getDay());

NewDate.toLocaleString('default', {
    weekday: "long"
})

console.log(NewDate.toString());









