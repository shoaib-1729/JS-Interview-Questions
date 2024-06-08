const printFullName = function(state, country) {
    console.log(`Name: ${this.firstName} ${this.lastName} from ${state}, ${country}`)
}

let person1 = {
    firstName: "Shoaib",
    lastName: "Akhtar",
    // printFullName: function() {
    // console.log(this)
    //     console.log(`Name: ${this.firstName} ${this.lastName}`)
    // }
}

let person2 = {
    firstName: "Akshay",
    lastName: "Saini",
    // don't use arrow function with this, since it has no context of "this"
    // printFullName: function() {
    //     console.log(this);
    //     console.log(`Name: ${this.firstName} ${this.lastName}`)
    // }
}

// this refers to context of the object which calls the function
// person1.printFullName();
// person2.printFullName();

// using call

// function borrowing (using call)
// person1.printFullName.call(person2)


// in, case function is defined outside the object, then we can use call directly without borrowing

// we have the pass the reference of this inside call, jisko this point karega. And the later arguments are the arguments of the functions
// printFullName.call(person1, "Delhi", "India")
// printFullName.call(person1, "Delhi", "India")
// printFullName.call(person2, "Dehradun", "India")

// for apply, it is similar to call. The only difference is how we pass the arguments, in apply the first argument is reference and to this only, but the later arguments to the function are passed as a list.

// printFullName.apply(person1, ["Delhi", "India"])
// printFullName.apply(person2, ["Delhi", "India"])


// bind method

// it binds the method with the reference to this keyword, and returns us the copy of that function. The function is returned and can be invoked later whenever we want.
const printMyName = printFullName.bind(person2, "Delhi", "India")
console.log(printMyName)
    // invoking function
printMyName()