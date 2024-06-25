// 1. arrow function don't have accessed to 'arguments' keyword

// Examples:

// normal function
function Add() {
    const [a, b] = arguments
    console.log(`Sum of ${a} and ${b} is ${a+b}`)
}

// Add(5, 4)

// arrow function
const addArrow = () => {
    const [a, b] = arguments
    console.log(`Sum of ${a} and ${b} is ${a+b}`)
}

// addArrow(5, 4)

// 2. Arrow function can't be used as constructor functions

// Examples:

// normal function

function CreateObj(name, age) {
    this.name = name;
    this.age = age;
}

// const obj1 = new CreateObj("Shoaib", 25)
// console.log(obj1.name);
// console.log(obj1.age);

// const obj2 = new CreateObj("MS Dhoni", 40)
// console.log(obj2.name);
// console.log(obj2.age);

// this can not be done using arrow functions

const CreateObjArrow = (name, age) => {
    this.name = name;
    this.age = age;
}

// const objArrow1 = new CreateObjArrow("Shoaib", 25)
// console.log(objArrow1.name);
// console.log(objArrow1.age);

// const objArrow2 = new CreateObjArrow("MS Dhoni", 40)
// console.log(objArrow2.name);
// console.log(objArrow2.age);

// 3. arrow functions don't have their own reference to this keyword

// behaviour of this inside normal functions

let obj = {
    name: "Shoaib",
    age: 25,
    greet: function() {
        console.log(this)
        console.log(`Hi ${this.name}`)
    }
}

// obj.greet();

// in case of arrow functions, they don't have their own reference of this. They inherit this from the surrounding lexical context (the context in which they were defined).

// Case:1 (when the arrow function doesn't have any parent)
let objArrowOne = {
    name: "Shoaib",
    age: 25,
    greet: () => {
        console.log(this)
        console.log(`Hi ${this.name}`)
    }
}

objArrowOne.greet();

// Case:2 (when the arrow function have a parent which is a non-arrow function)
let objArrowTwo = {
    name: "Shoaib",
    age: 25,
    sayHello: function() {
        const greet = () => {
            console.log(this)
            console.log("Hey There!!")
        }
        greet()
    }
}

objArrowTwo.sayHello()