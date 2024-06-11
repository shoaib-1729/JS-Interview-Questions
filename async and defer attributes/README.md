
# Async and Defer Attributes :

`1. script src = "" />`
- Browser starts loading your web page, parsing the HTML present in it.
- As soon as the browser counters the script tag, it pauses the parsing of HTML then and there, and starts fetching the scripts and executes it there and then.
- HTML Parsing is paused during the fetching and execution of the script, and continues only when the scripts are fully execeuted.
- This is not the good case since javascript is blocking the flow of your HTML.


`2. script async src = "" />`
- But, in the case when async attribute is present inside the script tag, meanwhile the HTML parsing is done, the scipt is fetched from the network asynchronously along with the HTML parsing.
- As soon as the scipts are fetched from the network, the HTML parsing is stopped and the scripts are execeuted then and there.
- And once the script is executed, the HTML parsing continues like regular.
- Here the fetching of the scipts from the network is done parallelly with HTML parsing, but during the execution of the scripts the HTML parsing is blocked.


`3. script defer src = "" />`
- In the case of defer attribute, the HTML parsing goes on and the script are fetched in paraellel.
- The HTML parsing goes on, and the scripts are executed when the HTML parsing is fully completed.
- Using defer attribute, doesn't blocks your HTML parsing.

## When to use what?
- _Using async attribute does not guartantee the execution of your script in order._

- _In case you have multiple scripts that are dependent in each other, unorderly execution of the scripts may break your code._

- _In these scenerios, you should prefer defer over async._

- _In case you have to load some external scripts such as Google Analytics scripts that are quite modular and are independent of our normal code, in these cases, it makes sense to use async attribute._

- _Otherwise, it is advised to use defer since it maintains the orderly execution of the scripts and is kind of best of both the worlds._







### Article: 

_Here is a good medium article on this:_

[JavaScript Async & Defer](https://medium.com/@dilarauluturhan/javascript-async-defer-9da1f3244ed5)

