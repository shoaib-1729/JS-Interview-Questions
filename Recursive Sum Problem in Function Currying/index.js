// Problem : sum(1)(2)(3)(4)...() => 10
// Note: In JS, Functions are first-class objects or first-class functions means they are like another variable or object in javascript.

// In case of sum(1)(2) => Function Currying
// But we have to return the function recursively

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// console.log(sum(1)(2))

// sum(1)(2)(3).. => Think Recursively
// Take the first argument fix 'a' as 1, and change the second argument 'b' according to the number of arguments present
// return the sum function again

// function sum(a) {
//     return function(b) {
//         // if the second argument exist then call the sum function with argument as 'a+b (iterative case)
//         if (b) {
//             return sum(a + b)
//         }
//         // else return a (base case)
//         return a;
//     }
// }
// console.log(sum(1)(2)(3)(4)())

// Converting into ES6 syntax using arrow functions

let sum = (a) => (b) => (b) ? sum(a + b) : a

console.log(sum(1)(2)(3)(4)())