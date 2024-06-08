// Closures = Function + Lexical Environment / Lexical Scope

// Closures (Case-1) :
// function x() {
//     let a = 5;

//     function y() {
//         console.log(a)
//     }
// call that inner function
//     y()
// }
// x()


// Closures (Case-2) :
function x() {
    let a = 5;

    function y() {
        console.log(a)
    }
    // return that function
    a = 100;
    // it doesn't returns the function only, it returns the function y() along with it's lexical scope.
    return y;
}

// when function x returns something, all it's scope inside the call stack is gone now. But the inner function somehow remembers the references to the variables, and other stuffs that can be used later
const z = x()
z();

// Uses of Closures:

/*
1. Module Design Pattern
2. Currying
3. Functions like once
4. Memoize
5. Maintaining state 'in async' world (async programming)
6. setTimeouts
7. Iterators
8. and many more...
*/