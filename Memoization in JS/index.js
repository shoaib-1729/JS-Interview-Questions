// normal square function
// function square() {
//     let res;
//     return function(n) {
//         res = n * n;
//         return res
//     }
// }

// let func = square()
// console.log(func(5));

// building the optimized version of the above square function using the technique of memoization.
function memoizedSquare() {
    let cache = {};
    return function(n) {
        // if the key is already present in the cache, then don't calculate the result again, instead return the value corresponding to that key is the cache directly.
        if (n in cache) {
            console.log("Cached value returned.");
            return cache[n]
        }
        console.log("Calculating the value.");
        // if the key is not present, the calculate the square and store it inside cache
        cache[n] = n * n;
        // if 'n' is 5, then cache will look like
        /*
            {
                5:25
            }
      */
        // then return the value
        return cache[n];
    }
}

const func = memoizedSquare()
    // value will be calculated during the first call and stored inside the cache
    // console.log(func(5));
    // if, the function is called again with the same argument, then the value os returned directly from cache, hence a better optimized version than the previous square function.
    // console.log(func(5));