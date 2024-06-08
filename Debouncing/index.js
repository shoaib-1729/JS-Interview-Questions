// select the input element
const inputElement = document.querySelector("input")


// ek dusra function define karuga joh handleInout function ko kuch delay k baad call karega
const handleInput = (e) => {
        console.log("Calling API: ", e.target.value)
    }
    // ye function woh callback function aur delay receive karega as an argument aur us callback function ko us particular delay k baad call karwayega.
const debounce = function(callBackFunc, wait) {
        let timerId;
        return function(...args) {
            // pehle pichle wale timer ko clear kardo, agar user se wait se pehle type kara toh pehle wale cycle ka setTimeout ID remove kardo, taaki pehle wale ka console log naa dikhe.
            clearTimeout(timerId)
                // delay laga do
            timerId = setTimeout(() => {
                // ab yaha us function ko call karwa do.
                callBackFunc(...args)
            }, wait)
        }
    }
    // function
const debouncedFunc = debounce(handleInput, 1000)

// add event listener
inputElement.addEventListener("input", debouncedFunc)