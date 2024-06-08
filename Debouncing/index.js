// select the input element
const inputElement = document.querySelector("input")


// ek dusra function define karuga joh handleInout function ko kuch delay k baad call karega
// ye function woh callback function aur delay receive karega as an argument aur us callback function ko us particular delay k baad call karwayega.
const debounce = function(func, wait) {
        return function(e) {
            // delay laga do
            setTimeout(() => {
                // ab yaha us function ko call karwa do.
                func(e)
            }, wait)
        }
    }
    // function
const debouncedFunc = debounce()

// add event listener
inputElement.addEventListener("input", debouncedFunc)