// addition
function addition(a, b, c) {
    return a + b + c
}

// const res = addition(1, 2, 4);
// console.log(res);

// Function Currying: Converting a function such that it accepts only one argument at a time to a function
// function currying can be achieved through closures

function additionCurry(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

// const res1 = additionCurry(1)
// console.log(res1);
// const res2 = res1(2)
// console.log(res2);
// console.log(res2(3))

// const res = additionCurry(1)(2)(5)
// console.log(res);
const additionCurryNew = (a) => (b) => (c) => a + b + c

// converting the same addition function into modern ES6 syntax (arrow functions
const resNew = additionCurryNew(1)(2)(5)
console.log(resNew);


// real life use case
// suppose an email has to be sent where the arguments 'to', 'subject', 'body' has to be passed; lekin ye saare arguments alag alag jagah se milege; may be alag alag api call se aa rahe ho isiliye humei ek baar mei ek hi argument pass karna hai aur jab teeno arguments aa jaaye tabhi response dena hai warna nahi. This can be done through currying a function so that it takes one argument at a time and returns the output only when all the 3 arguments are passed
function sentEmail(to) {
    return function(subject) {
        return function(body) {
            return (`Email sent to: ${to} with Subject ${subject} having a body: ${body}`)
        }
    }
}

// const dev1 = sentEmail("shoaibDev@gmail.com")
// const dev2 = dev1("Regarding Product Deployment")
// console.log(
//     dev2("Start Deploying as soon as possible.")
// )