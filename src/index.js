/* var numbers = [3, 56, 2, 48, 5]; */

//Map -Create a new array by doing something with each item in an array.
/* function double(x){
    return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers); */

/* 
var newNumbers = [];
function double(x){
    newNumbers.push(x * 2);
}
numbers.forEach(double);
console.log(newNumbers); */


/* var newNumbers = [];
numbers.forEach(function (x){
    newNumbers.push(x * 2);
});
console.log(newNumbers); */




/* var numbers = [2, 56, 109, 357]; */
//Filter - Create a new array by keeping the items that return true.

/* const newNumbers = numbers.filter(function(num){
    return num > 10
});
console.log(newNumbers) */

/* var newNumbers = [];
numbers.forEach(function(num){
    if(num < 10){
        newNumbers.push(num);
    }
}) */



//Reduce - Accumulate a value by doing something to each item in an array.
/* var newNumbers = 0;
numbers.forEach(function(currentNumber) {
    newNumber += currentNumber
}
 console.log(newNumbers); */
 
/*  var newNumber = numbers.reduce(function(accumulator, currentNumber){
     return accumulator + currentNumber;
 })
console.log(newNumber);
 */



//Find - find the first item that matches from an array.
/* const newNumbers = numbers.find(function(num){
    return num > 10;
}) */



//FindIndex - find the index of the first item that matches.
/* const newNumbers = numbers.findIndex(function(num){
    return num > 10;
}) */

import emojipedia from "./emojipedia";

const newEmojiepedia = emojipedia.map(function(emojieEntry){
    return emojieEntry.meaning.substring(0, 100)
})

console.log(newEmojiepedia);