// fetching values of input and span inside the dom
const inputElement = document.querySelector("input")
const span = document.querySelector("h2 span")

// making a throttle polyfill
function throttle(func, delay = 1000) {
    // define the timer Id to track setTimeout
    // this form a closure with the inner function, and this value along with the inner function is being stored inside the lexical scope of the inner function 
    let timerId = null;
    // context of this (closure)
    let context = this;
    // adding a variable to track arguments types inside the input (closure)
    let lastArgs = []
        // flag for first call, jab pehli baar event fire ho tab throttle matt karo uske baad se throttle karo
    let firstCall = true;
    return function(...args) {
        // update the value of arguments
        lastArgs = args;
        // if, there is setTimeout running previously, then simply return without running the setTimeout
        // since, the setTimeout is running previously the timerId wouldn't be null in the other cycle of the function call
        if (timerId) return;
        // agar first call ho
        if (firstCall) {
            // function  call karo jaise call ho raha hai normally
            func.apply(context, lastArgs)
                // aur ab flag ko false karke return kar jaao, taaki code aage run naa kare aur timer naa chale
            firstCall = false
            return;
        }
        // call the function after some delay
        timerId = setTimeout(() => {
            // after the setTimeout has been called, set the timerId again to null for the next cycle of the function call
            timerId = null;
            // call the function func, after some delay gap and pass on the arguments using spread operator
            func.apply(context, lastArgs)
        }, delay)
    }
}



// defining calling function
function callApi(value) {
    console.log("Calling API: ", value);
}

//calling the input api's using throttle as well
const throttledInput = throttle(callApi, 500)

// call the api function on every 'input' event inside input element
inputElement.addEventListener('input', (e) => {
    throttledInput(e.target.value);
})

// calling throttled function
// const updateNumberThrottle = throttle(() => {
//     span.innerText = ++span.innerText
// }, 500)

// increase the count of span on every 'mousemove' event
// document.addEventListener('mousemove', () => {
//     updateNumberThrottle();
// })