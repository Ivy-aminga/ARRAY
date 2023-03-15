// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12] ;
let lastElement = arr1.pop();
console.log(lastElement);
 
let arr2 = [true, "green", "where",12,56];
let elementLast = arr2.pop();
console.log(elementLast);


// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];
const p = ["Cow", "Bird", "Snake", "Dog"];
let pets = p.join();
console.log(pets);


// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let notDuplicate = arr.filter((orange,index)=>{
    return arr.indexOf(orange)===index;
})
console.log(notDuplicate);

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let Duplicate = arr.filter((orange,index)=>{
    return arr.indexOf(orange)!==index;
})
console.log(Duplicate);

// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
let rays = "way"
if (rays == "way"){
    console.log(rays)
}
else(console.log("the search was not found"))



// Write a JS script to sort the following string
// let word = "sevink"
//  option 1

let word = "sevink"
console.log(word.split(``).sort().join(``));






 