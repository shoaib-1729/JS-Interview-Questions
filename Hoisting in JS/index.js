// understanding hoisting in js

/*
Hosting is Javascript's default behaviour of moving declarations to the top.
Why Hosting exists? - Because JS Engine as to allocate memory for variables before the execution of the program (during the memory creation phase of the execution context)
*/

// using var
// variables created with 'var' are hoisted inside Global scope (that is window, which is the global scope for browsers)
// console.log(a)
// var a = 10;

// temporal dead zone:
// variables created using 'let' and 'const' are hosted but not in the Global scope (as in case of 'var'), they have their own lexical scope (called as 'Script' scope), inside the script scope we can't access the values before they have been initialized
// in case of 'let' and 'const', the area before initialization is called as temporal dead zone, and will result in a "Reference Error"

// using let
// console.log(b)
let b = 10;

// using const
// console.log(c)
const c = 10;

// function declarations are also hosted inside the Global Scope during the memory creation phase of the execution context
// test()

// function test() {
//     console.log("Hello")
// }

// First Question

// if functions are used as function expressions, both will result in type error
// since only the variables created with 'var' and normal functions are hoisted inside Global Scope, not the function expressions

// test()
// console.log(test)

// var test = function() {
//     console.log("Hello")
// }

// test()
// var test = () => {
//     console.log("Hello")
// }

// Second Question
var x = 10;

function testValue() {
    console.log(x);
    var x = 20
}

testValue()


// Third Question

// var pName = "name 1"

// function print() {
//     pName = "name 2"
//     if (1 == 2) {
//         var pName = "name 3"
//     }
// }

// print()
// console.log(pName)

// what if we use let instead of var

// var pName = "name 1"

// function print() {
//     pName = "name 2"
//     if (1 == 2) {
//         let pName = "name 3"
//     }
// }

// print()
// console.log(pName)