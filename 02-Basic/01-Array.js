//* Array

const myArr = [1,2,3,4]
const myHeros = ['shaktimal', 'naagraj']

const myArr2 =new Array(1, 2, 3, 4)
// console.log(myArr[5]);

//************* Array methods ****************/

// myArr.push(6) //* Add last alimant in array
// myArr.pop() //* Delet last alimant in array
// myArr.shift() //* Delet first element
myArr.unshift(0) //* Add first element

//* This is the process you ask array (rendom-1, 2, 3) is present or not. it alwaya retyrn in bulian valure
// console.log(myArr.includes(4)); //* true : falsh ;
// console.log(myArr.indexOf(4)); //* Return the index number


const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);

//****** Slice & Splice *******/

const MyArr = [0, 1, 2, 3, 4, 5]

// console.log(" A ", MyArr);

const myn1 = MyArr.slice(1, 3)//* slice is not change the original array
// console.log(myn1); //* [1, 2]

// console.log(" B ", MyArr);

// console.log(" c ", MyArr);
// const myn2 = MyArr.splice(1, 3) //* splice is change the original array
// console.log(" c ", MyArr); //* original array is [0, 4, 5]
// console.log(myn2); //* cut the array is [1, 2, 3]


//*********** Part 2 **************/

const marvel_heros = ["Thor", "Ironman", "spiderman"] //* Array 1
const dc_heros = ["superman", "Flash", "batman"] //* Array 2

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

//* Morje two array ( Cancat())
const Mix = marvel_heros.concat(dc_heros)
// console.log(Mix);

//* Morje many array ( sprad mathod ) Ex--[...Array1, ...Array2, ...Array3, Etc]
const newMix = [...marvel_heros, ...dc_heros]
// console.log(newMix);

//* convert multipul array tt a single array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//* Basicaly it is check the Array list this name/number is avaliable in this array aor not (true : false)
console.log(Array.isArray("Abhijit"));


//* It is convert another data type to array format
console.log(Array.from("Abhijit"));

console.log(Array.from({name: "Abhijit"})); //* Intresting


//* This is also convert array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





