
//* Immediately Invocked Function Expression ()


//* Normal iiFE Function EXAMPLE [ write function inside (), and then call it with () execution operator]
//* Named iiFE Function EXAMPLE
(function () {
    console.log(`DB CONNECTED 1`);
})();


//* Arrow Function EXAMPLE
( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
} )('Abhijit');

//* Async Await EXAMPLE
( async () => {
    console.log(`DB CONNECTED 3`);
} ) ();


//* IIFE is a function that is executed right after it is created




