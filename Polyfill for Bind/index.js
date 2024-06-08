// implementation for bind
const nameObj = {
    firstName: "Shoaib",
    lastName: "Akhtar"
}

const printFullName = function(skill, state, country) {
    console.log(`${this.firstName} ${this.lastName}, a ${skill} from ${state}, ${country}`)
}

const bindName = printFullName.bind(nameObj, "Coder", "Delhi", "India");
bindName()

// create your own bind function (or creating a polyfill for bind)

// creating your own function 'myBind' inside Function Prototype so that it will be available to us with every method.

Function.prototype.myBind = function(...args) {
    // in bind, this points to the method on which bind is called
    const obj = this;
    // extract the first value from the args array, this gives you the object which is being passed inside bind
    const firstParam = args[0]
        // extracting the remaining values from args array, except the first element
    const RemParams = args.splice(1);

    // extract the arguments passed to the binded function when called.
    return function(...args2) {
        // use apply instead of call, since we are passing array as argument (RemParams is an array)
        obj.apply(firstParam, [...RemParams, ...args2])
    }
}


const myBindName = printFullName.myBind(nameObj, "Coder", "Delhi");
myBindName("India")