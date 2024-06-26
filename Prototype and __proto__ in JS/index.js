// prototype in js

let arr = [1, 2, 3, 4]
console.log(arr.length)

//

// how this 'arr' has access to various properties?
// that's because 'arr' is inherited from the Array class which inturned the inherited from the Object Class
// Array class has access to all the properties and methods of array.
// we can implement our own custom method and can add it to the array class using prototypes.

// lets, add a method called sum() in the Array class using prototype

Array.prototype.sum = function() {
    return this.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

console.log(arr.sum())
    // you can acess the prototype using the '__proto__' keyword
    // prtototype property -> ye property batati hai ki kisse inherit hua hai
    // __proto__ keyword -> ye usko directly access karta hai jisse inheit hua hai

console.log(arr.__proto__)


// Question
const date = new Date()
const currentYear = date.getFullYear()
console.log(currentYear)

// implement a custom function 'getLastYear()' which returns 'getFullYear() - 1' inside the date class

// Date.prototype.getLastYear = function() {
//     return (this.getFullYear() - 1)
// }

// const lastYear = date.getLastYear()

// console.log(lastYear)

// prototypes inside constructor functions (implemented through class in es6 syntax)
// function Animal(name) {
//     this.name = name
// }

// creating objects using Animal constructor
// const dog = new Animal("Buddy")
// console.log(dog.name)

// using es6 syntax (classes)
class Animal {
    constructor(name) {
        this.name = name
    }
}
// adding 'eat()' method inside Animal class using prototypes
Animal.prototype.eat = function() {
        return `${this.name} is eating...`
    }
    // console.log(Animal.__proto__);

const dog = new Animal("Buddy")
console.log(dog.name);
console.log(dog.eat());
// console.log(dog);