# What is JavaScript?

- JavaScript is a scripting or programming language that allows you to implement complex features on web pages

- JavaScript is a **_high-level, versatile programming language_** primarily used for front-end web development. It allows developers to create interactive and dynamic web applications by manipulating the content and behavior of web pages in real-time.

  - <span style="color:purple;">**_High level because_**</span>: JavaScript is a high-level language because it abstracts away many of the low-level details and complexities associated with computer hardware and memory management. Developers don't need to concern themselves with managing memory allocation or hardware-specific operations, which can make programming more accessible and less error-prone.

  - <span style="color:purple;">**_Versatile beacuse:_**</span> JavaScript's versatility stems from its ability to be used for a wide range of applications. While it's commonly associated with web development for creating interactive web pages, it can also be used on the server-side (with Node.js) to build web servers and other types of applications. This versatility means that a developer proficient in JavaScript can work on various projects and platforms.

  - <span style="color:purple;">**_Interpreted Nature:_**</span> JavaScript is typically not compiled into machine code but rather interpreted by the browser. This means that the browser reads and executes the JavaScript code directly, usually line by line, as the web page loads.
    This interpretation allows for flexibility and real-time interactions but can sometimes result in performance considerations, which are mitigated by modern JavaScript engines that employ just-in-time (JIT) compilation.
  - <span style="color:purple;">**_Lightweight and Dynamic:_**</span>JavaScript is often characterized as a lightweight language because it doesn't require a complex development environment or compilation step. You can write JavaScript code in a simple text editor and run it in a web browser.
    It is also dynamic in nature, meaning that variables don't need to be declared with specific data types, and the code can be modified and executed on the fly.

# What is API?

- <span style="color:orange">**_Application Programming Interfaces (APIs)_**</span> provide you with extra superpowers to use in your code.

  - APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement. They do the same thing for programming that ready-made furniture kits do for home building — it is much easier to take ready-cut panels and screw them together to make a bookshelf than it is to work out the design yourself, go and find the correct wood, cut all the panels to the right size and shape, find the correct-sized screws, and then put them together to make a bookshelf.

  - They generally fall into two categories.

    1. Browser APIs are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. eg., DOM, Geolocation API, Canvas, WebGL, Audio and Video API's.

    2. Third party APIs are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web.
       e.g., Twitter API, Yotube API and many more.

## What are promises in js?

Promises in JavaScript are a mechanism for handling asynchronous operations, such as fetching data from a server, reading a file, or waiting for a timeout to complete. Promises provide a cleaner and more structured way to work with asynchronous code compared to traditional callbacks.

A Promise represents a value that might not be available yet but will be at some point in the future. It can be in one of three states:

1. Pending: The initial state of a promise. It represents an operation that hasn't completed yet.

2. Fulfilled (Resolved): The promise has successfully completed, and a result value is available.

3. Rejected: The promise has encountered an error or failure, and an error reason is available.

Promises have two built-in methods, then() and catch(), for handling the results and errors of asynchronous operations:

- The then() method is used to handle the fulfillment of a promise (when it's resolved). It takes two optional callback functions: one for the success case (when resolve is called) and one for the error case (when reject is called).

- The catch() method is used to handle any errors that occur during the promise's execution. It's essentially a shorthand for then(null, errorHandlingFunction)

```
const fetchData = () => {
return new Promise((resolve, reject) => {
 setTimeout(() => {
   const randomValue = Math.random();
   if (randomValue < 0.5) {
     resolve('Data fetched successfully');
   } else {
     reject('Error: Data fetch failed');
   }
 }, 1000);
});
};

fetchData()
 .then((result) => {
   console.log(result); // Success: Data fetched successfully
 })
 .catch((error) => {
   console.error(error); // Error: Data fetch failed
 });

```
