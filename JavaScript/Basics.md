# What is JavaScript?

- JavaScript is a scripting or programming language that allows you to implement complex features on web pages

- JavaScript is a **_high-level, interpreted ,versatile programming language_** primarily used for front-end web development. It allows developers to create interactive and dynamic web applications by manipulating the content and behavior of web pages in real-time.

  - <span style="color:purple;">**_High level because_**</span>: JavaScript is a high-level language because it abstracts away many of the low-level details and complexities associated with computer hardware and memory management. Developers don't need to concern themselves with managing memory allocation or hardware-specific operations, which can make programming more accessible and less error-prone.

  - <span style="color:purple;">**_Versatile beacuse:_**</span> JavaScript's versatility stems from its ability to be used for a wide range of applications. While it's commonly associated with web development for creating interactive web pages, it can also be used on the server-side (with Node.js) to build web servers and other types of applications. This versatility means that a developer proficient in JavaScript can work on various projects and platforms.

  - <span style="color:purple;">**_Interpreted Nature:_**</span> JavaScript is typically not compiled into machine code but rather interpreted by the browser. This means that the browser reads and executes the JavaScript code directly, usually line by line, as the web page loads.
    This interpretation allows for flexibility and real-time interactions but can sometimes result in performance considerations, which are mitigated by modern JavaScript engines that employ just-in-time (JIT) compilation.
  - <span style="color:purple;">**_Lightweight and Dynamic:_**</span>JavaScript is often characterized as a lightweight language because it doesn't require a complex development environment or compilation step. You can write JavaScript code in a simple text editor and run it in a web browser.
    It is also dynamic in nature, meaning that variables don't need to be declared with specific data types, and the code can be modified and executed on the fly.

<hr style="background-color: red";/>

# What is API?

- <span style="color:orange">**_Application Programming Interfaces (APIs)_**</span> provide you with extra superpowers to use in your code.

  - APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement. They do the same thing for programming that ready-made furniture kits do for home building — it is much easier to take ready-cut panels and screw them together to make a bookshelf than it is to work out the design yourself, go and find the correct wood, cut all the panels to the right size and shape, find the correct-sized screws, and then put them together to make a bookshelf.

  - They generally fall into two categories.

    1. Browser APIs are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. eg., DOM, Geolocation API, Canvas, WebGL, Audio and Video API's.

    2. Third party APIs are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web.
       e.g., Twitter API, Yotube API and many more.

<hr style="background-color: red";/>

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
<hr style="background-color: red";/>

# Explain the difference between null and undefined.

- **Definition**: null is an explicitly assigned value that represents the absence of any object value. undefined means a variable has been declared but has not been assigned any value yet.
- Example: let a = null; and let b; // undefined

<hr style="background-color: red";/>

# What is the significance of JavaScript closures?

- **Definition**: Closures are functions that remember the scope in which they were created and can access variables from that outer scope even after it has finished executing.

```
function outer() {
  let message = "Hello, ";
  return function inner(name) {
    console.log(message + name);
  };
}
const greeting = outer();
greeting("Alice"); // Outputs: "Hello, Alice"
```
<hr style="background-color: red";/>

# How do you declare variables in JavaScript (var, let, const)?

- **Definition**: var is used for variable declaration in the function or global scope. let and const are used for block-scoped variable declaration, with const being immutable.
- Example: var x = 10;, let y = 20;, const z = 30;

<hr style="background-color: red";/>

# Describe the concept of hoisting in JavaScript.

- **Definition**: Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during the compile phase.
- Example: ` console.log(a); // Outputs: undefined   var a = 5;`
<hr style="background-color: red";/>

# What is the difference between == and === in JavaScript?

- **Definition**: == is a loose equality operator that compares values for equality but performs type coercion. === is a strict equality operator that compares both value and type.
- Example: 5 == "5" evaluates to true, but 5 === "5" evaluates to false.


<hr style="background-color: red";/>

# Explain the purpose of the this keyword in JavaScript.

- **Definition**: this refers to the current object or context within which a function is invoked.
- Example:

```
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};
person.greet(); // Outputs: "Hello, Alice!"
```

# What are the data types in JavaScript?

- **Definition**: JavaScript has several data types, including string, number, boolean, object, function, null, and undefined.

<hr style="background-color: red";/>

# How do you create an array in JavaScript?
- Definition: Arrays in JavaScript can be created using square brackets [ ] and can hold a collection of values.
- Example: `const numbers = [1, 2, 3];`

<hr style="background-color: red";/>

# What is the difference between an object and an array in JavaScript?

- **Definition**: Objects are collections of key-value pairs, while arrays are ordered collections of values accessed by their indices.

```
const person = { name: "Alice", age: 30 };
const numbers = [1, 2, 3];
```
<hr style="background-color: red";/>

# Explain callback functions in JavaScript.
- **Definition**: Callback functions are functions passed as arguments to other functions and are executed after the completion of the parent function.
- Example:
```
function doSomething(callback) {
  setTimeout(function() {
    console.log("Task done!");
    callback();
  }, 1000);
}
doSomething(function() {
  console.log("Callback called.");
});
```
<hr style="background-color: red";/>

# What is an IIFE (Immediately Invoked Function Expression)?

- **Definition**: An IIFE is a function that is defined and executed immediately after its creation.
- Example:
```
(function() {
  console.log("I'm an IIFE!");
})();
```

<hr style="background-color: red";/>

# How does event delegation work in JavaScript?
- **Definition**: Event delegation is a technique where you attach a single event listener to a common ancestor of multiple elements, allowing you to handle events for multiple elements with a single handler.
- Example: Instead of attaching a click event to each list item, you can attach it to the parent ul element and check which item was clicked.

<hr style="background-color: red";/>

# Describe the difference between function declarations and function expressions.
- Definition: Function declarations are hoisted and can be called before they are defined. Function expressions are not hoisted and must be defined before they are called.
- Examples: 
```
// Function Declaration
function greet() {
  console.log("Hello!");
}

// Function Expression
const greet = function() {
  console.log("Hello!");
};
```

<hr style="background-color: red";/>

# What is the purpose of the bind, call, and apply methods?
- **Definition**: These methods allow you to control the value of this within a function and optionally pass arguments to the function.
- Example:
```
const person = { name: "Alice" };
function greet() {
  console.log(`Hello, ${this.name}!`);
}
const boundGreet = greet.bind(person);
boundGreet(); // Outputs: "Hello, Alice!"
```

<hr style="background-color: red";/>

# What is the prototype chain in JavaScript?
- **Definition**: The prototype chain is a mechanism by which objects in JavaScript inherit properties and methods from their prototype object.
- Examples: 
```
const person = { name: "Alice" };
const employee = Object.create(person);
employee.salary = 50000;
console.log(employee.name); // Outputs: "Alice"
```

<hr style="background-color: red";/>

# How can you handle asynchronous operations in JavaScript?
- **Definition**: Asynchronous operations in JavaScript can be handled using callbacks, Promises, async/await, and event listeners.
- Example: Using Promises to fetch data asynchronously from a server.
<hr style="background-color: red";/>

# Explain the concept of promises and async/await.
- **Definition**: Promises are objects that represent the eventual completion or failure of an asynchronous operation. ***async/await*** is a modern way to work with Promises, making asynchronous code more readable and maintainable.
- Example:
```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

<hr style="background-color: red";/>

# How does JavaScript handle variable scope in for-loops?
- **Definition**: In JavaScript, variables declared with var in a for-loop have function scope, while variables declared with let or const have block scope.
- Examples:
```
for (var i = 0; i < 5; i++) {
  // 'i' is accessible here
}
console.log(i); // If 'i' is declared with 'var', it's still accessible; otherwise, it's not.
```
<hr style="background-color: red";/>

# Describe the concept of function currying.
- **Definition**: Function currying is the technique of converting a function that takes multiple arguments into a series of functions that take one argument each.
- Example:
```
function add(a) {
  return function(b) {
    return a + b;
  };
}
const add5 = add(5);
console.log(add5(3)); // Outputs: 8
```

<hr style="background-color: red";/>

# What is a closure in JavaScript, and why is it useful?
- **Definition**: A closure is a function that "closes over" its surrounding scope, allowing it to access variables from that scope even after the outer function has finished executing. Closures are useful for maintaining state and data privacy.
- Examples:
```
function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const increment = counter();
increment(); // Outputs: 1
increment(); // Outputs: 2
```

<hr style="background-color: red";/>

# Explain the Event Loop in JavaScript.
- **Definition**: The Event Loop is a fundamental part of JavaScript's concurrency model, responsible for handling asynchronous tasks, including events and callbacks.
- Example: The Event Loop continuously checks the message queue for tasks to execute.

<hr style="background-color: red";/>

# What are arrow functions, and how do they differ from regular functions?
- **Definition**: Arrow functions are a concise way to write anonymous functions in JavaScript. They differ from regular functions in how they handle this, have no arguments object, and cannot be used as constructors.
- Examples: `const add = (a, b) => a + b;`
<hr style="background-color: red";/>

# How does JavaScript handle memory management, and what is garbage collection?
- **Definition**: JavaScript uses automatic memory management through a process called garbage collection, which automatically deallocates memory occupied by objects that are no longer in use.
- Example: When an object has no references pointing to it, it becomes eligible for garbage collection.

<hr style="background-color: red";/>

# Explain the concept of prototypal inheritance.
- **Definition**: Prototypal inheritance is a mechanism in JavaScript where objects inherit properties and methods from their prototype object. 
- Example: 
```
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
};
const dog = new Animal("Buddy");
dog.sayName(); // Outputs: "My name is Buddy"
```

<hr style="background-color: red";/>

# Describe the purpose and use cases of the Map and Set objects.
- Definition: Map is a collection of key-value pairs, and Set is a collection of unique values. They are useful for maintaining data integrity and avoiding duplicate entries.
- Example:
```
const userMap = new Map();
userMap.set('Alice', 30);
userMap.set('Bob', 25);
```

<hr style="background-color: red";/>

# What is the difference between localStorage and sessionStorage?

- **Definition**: Both localStorage and sessionStorage are web storage options in browsers. localStorage persists data even after the browser is closed, while sessionStorage data is only available during the session.
- Example: Storing user preferences using localStorage

<hr style="background-color: red";/>

# Explain the same-origin policy and how it affects JavaScript.

- **Definition**: The same-origin policy is a security measure that restricts web pages from making requests to a different domain than the one that served the web page, to prevent cross-site request forgery (CSRF) attacks.
- Example: A JavaScript code from example.com cannot make AJAX requests to api.example2.com.
<hr style="background-color: red";/>

# What is a JavaScript module, and how do you use it?

- **Definition**: A JavaScript module is a self-contained piece of code that encapsulates functionality and variables. Modules can be imported and used in other parts of the code.
- Example: Creating a module to export utility functions and importing them in another file.
<hr style="background-color: red";/>

#   DOM and Web APIs Questions:

## What is the Document Object Model (DOM)?
- **Definition**: The DOM is a hierarchical representation of an HTML document, which allows JavaScript to access and manipulate the content and structure of a web page.
- Example: Accessing and modifying HTML elements using JavaScript.

## How do you select elements in the DOM using JavaScript?

- **Definition**: You can select elements using various methods like getElementById, querySelector, getElementsByClassName, getElementsByTagName, etc.
- Example: document.querySelector(".my-class") selects the first element with the class "my-class".

## Explain the difference between getElementById and querySelector.

- **Definition**: getElementById selects an element by its unique ID attribute, while querySelector selects an element using CSS selector syntax.
- Example:
```
document.getElementById("myElement");
document.querySelector(".myClass");
```

## How do you create and append elements to the DOM dynamically?

- **Definition**: You can use JavaScript to create new DOM elements using methods like createElement and then append them to the document using methods like appendChild.
- Example:
```
const newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
document.body.appendChild(newElement);
```

## What is event delegation, and why is it useful in handling events?

- **Definition**: Event delegation is a technique where you attach a single event listener to a common ancestor of multiple elements. It's useful for efficiency and reducing memory usage.
- Example: Instead of attaching a click event to each list item, you can attach it to the parent ul element and check which item was clicked.

## Describe the difference between the localStorage and cookies for storing data.

- **Definition**: Both localStorage and cookies can be used to store data on the client side. However, localStorage provides a simpler and more secure way to store larger amounts of data without sending it with every HTTP request.
- Example: Storing user preferences in `localStorage

<br>
<hr style="background-color: red";/>