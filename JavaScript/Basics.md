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
- Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. It's important to understand that only the declarations are hoisted, not the initializations. The behavior can be different for var, let, and const, and it also applies to function declarations.
- Let's explore hoisting with examples for each case:

1. **Function Declarations:**

- Function declarations are hoisted to the top of their containing scope. You can call a function before it's declared.

- Example:

```
sayHello(); // This works because of hoisting

function sayHello() {
  console.log('Hello!');
}
```

2. **Variable Declarations with var:**

- Variables declared with var are hoisted to the top of their containing function or global scope, but only the declarations are hoisted, not the initializations.
- Example:

```
console.log(x); // undefined (hoisted declaration)
var x = 5;

// Equivalent to:
var x;         // hoisted declaration
console.log(x); // undefined
x = 5;          // initialization
```

3. **Variable Declarations with let and const:**

- Variables declared with let and const are also hoisted to the top of their containing block or function scope, but unlike var, they are in the "temporal dead zone" until they are actually declared.
- Example:

```
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

4. **Hoisting Order:**

- When variables and functions are hoisted together, functions take precedence over variables.
- Example:

```
foo();  // This works because of hoisting
var foo = 5;
function foo() {
  console.log('Hello from foo!');
}
```

In this example, the function declaration is hoisted first, so calling foo() logs the function's message even before the variable foo is declared.

5. **Function Expressions:**

- Function expressions are not hoisted like function declarations.
- Examples:

```
bar(); // TypeError: bar is not a function
var bar = function() {
  console.log('Hello from bar!');
};
```

In this case, the variable bar is hoisted, but it's initially undefined, and trying to call it results in an error.

6. **Block Scopes (let and const):**

- Variables declared with let and const have block-level scope, which means they are hoisted to the top of their block, but they are not initialized until they reach their declaration within the block.
- Examples:

```
if (true) {
  console.log(z); // ReferenceError: Cannot access 'z' before initialization
  let z = 20;
}
```

In summary, hoisting in JavaScript is a behavior where declarations (variables and functions) are moved to the top of their containing scope during the compilation phase.

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

- **Definition**: Promises are objects that represent the eventual completion or failure of an asynchronous operation. **_async/await_** is a modern way to work with Promises, making asynchronous code more readable and maintainable.
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

- **Definition**: Arrow functions are a **concise way to write anonymous functions in JavaScript**. They differ from regular functions in how they handle this, have no arguments object, and cannot be used as constructors.
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

# DOM and Web APIs Questions:

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

# What is object data type in javascript?

- The Object data type is a fundamental data type that represents a collection of key-value pairs. Objects are used to store and manipulate data in a structured way. They are one of the most important and versatile data types in the language.
- Objects can be created using curly braces {} or the new Object() constructor.

```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"
```

Objects in JavaScript can store various types of values as their properties, including other objects, functions, arrays, and primitive data types like strings, numbers, and booleans. This flexibility makes objects a powerful tool for organizing and manipulating data in JavaScript.

Additionally, objects can have methods, which are functions defined as properties of the object. These methods can perform actions or computations related to the object's data.

- Here's an example of an object with a method:

```
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6

// In modern JavaScript, you can also use shorthand notation to define methods within an object:

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
```

Objects are a fundamental building block in JavaScript and are widely used for data modeling and structuring in the language.

<hr style="background-color: red";/>

# Everything you need to know about Javascript objects.

## 1. Basics of Objects:

- Objects in JavaScript are collections of key-value pairs.
- Keys (also called properties) are strings or symbols, and values can be any data type, including other objects.
- Example:

```
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};
```

## 2. Accessing Object Properties:

- You can access object properties using dot notation or bracket notation.
- Example:

```
console.log(person.firstName); // John
console.log(person['lastName']); // Doe
```

## 3. Adding and Modifying Properties:

- You can add or modify properties of an object on the fly.
- Example: `person.email = 'john@example.com';
person.age = 31;
`

## 4. Removing Properties:

- Use the delete keyword to remove properties.
- Example: `delete person.age;`

## 5. Object Methods:

- Objects can also have methods, which are functions stored as properties.
- Examples:

```
const car = {
  brand: 'Toyota',
  start: function () {
    console.log('Car started');
  },
};

car.start(); // Car started
```

## 6. Object Constructors:

- You can create objects using constructors or classes.
- Example:

```
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person1 = new Person('Alice', 'Johnson');
```

## 7. Prototypes and Inheritance:

- Objects in JavaScript are linked to a prototype.
- You can set up inheritance using prototypes.
- Example:

```
Person.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

console.log(person1.fullName()); // Alice Johnson
```

## 8. Object Destructuring:

- Easily extract object properties into variables.
- Example : `const { firstName, lastName } = person1;`

## 9. Object Spread Operator:

- Clone or merge objects using the spread operator.
- Example:

```
const employee = {
  ...person1,
  jobTitle: 'Software Engineer',
};
```

## 10. ES6 Classes:

- ES6 introduced class syntax for object-oriented programming.
- Example:

```
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

## 11. Object Methods and This:

- Understand how the this keyword works within object methods
- Examples:

```
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};
```

## 12. Object Property Descriptors:

- Learn about property descriptors and how to control property attributes.
- Examples:

```
Object.defineProperty(person, 'age', { writable: false });
```

13. Object Serialization and Parsing:

- Convert objects to JSON and parse JSON back to objects.
- Example:

```
const jsonString = JSON.stringify(person);
const parsedPerson = JSON.parse(jsonString);
```

<hr style="background-color: red";/>

# What is a callback function?

- A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are a fundamental concept in JavaScript and are commonly used in asynchronous operations like handling events, making HTTP requests, and working with timers. Callbacks allow you to define what should happen after a certain operation is completed, making your code more flexible and non-blocking.

Here's a basic explanation of how callback functions work:

1. **_Passing a Function as an Argument:_**
   You pass a function as an argument to another function. This function is often referred to as the "callback."

2. **_Execution at a Later Time:_**
   The function that receives the callback may execute it at some point in the future, usually after it has completed some task or operation.

3. **_Handling Asynchronous Code:_**
   Callbacks are commonly used in scenarios where operations are asynchronous, meaning they don't block the execution of the rest of the code. For example, when reading a file from disk or making an AJAX request, the result isn't available immediately, so a callback can be used to handle the result once it's ready.

Here's an example of a callback function in JavaScript:

```
function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Task completed.");
    callback(); // Execute the callback function
  }, 1000);
}

function callbackFunction() {
  console.log("Callback function executed.");
}

doSomethingAsync(callbackFunction);
```

In this example:

- **_doSomethingAsync_** is a function that simulates an asynchronous operation using setTimeout. It takes a callback function as an argument.
- Inside **_doSomethingAsync_**, after a delay of 1000 milliseconds (1 second), it logs "Task completed" and then calls the callback function.
- **_callbackFunction_** is the callback function passed to doSomethingAsync. It logs "Callback function executed."

When you run **_doSomethingAsync(callbackFunction)_**, the code behaves asynchronously. It prints "Task completed" after 1 second and then executes the **_callbackFunction_**, which prints "Callback function executed."

Callbacks are a powerful tool for handling asynchronous operations in JavaScript. However, they can lead to callback hell (nested callbacks) in complex scenarios. To mitigate this, modern JavaScript uses other techniques like Promises and async/await to make asynchronous code more readable and maintainable.

<hr style="background-color: red";/>

# Is javascript OOP ?

JavaScript is indeed an object-oriented programming (OOP) language. It supports the fundamental concepts of OOP, including objects, classes, inheritance, encapsulation, and polymorphism, although it implements them in a somewhat unique way compared to classical OOP languages like Java or C++.

Let's explore these OOP concepts in JavaScript:

1. **Objects:**

- In JavaScript, objects are the building blocks of the language. Everything in JavaScript is an object or can be represented as an object.
- Objects in JavaScript are collections of key-value pairs, where keys are strings (or symbols), and values can be any data type.

```
const person = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log('Hello!');
  },
};
```

2. **Classes and Prototypes:**

- JavaScript supports object creation through constructor functions and ES6 classes.
- Under the hood, JavaScript uses prototypes for inheritance.

```
// Using constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Using ES6 classes
class Animal {
  constructor(name) {
    this.name = name;
  }
}
```

3. **Inheritance:**

- JavaScript supports prototypal inheritance, where objects can inherit properties and methods from other objects.

```
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Inheritance
```

4. **Encapsulation:**

- While JavaScript doesn't have access modifiers like private or protected, you can achieve encapsulation through closures and naming conventions.

```
function Counter() {
  let count = 0; // Private variable
  this.increment = function() {
    count++;
  };
  this.getCount = function() {
    return count;
  };
}
```

5. **Polymorphism:**

- JavaScript supports polymorphism through function overriding and dynamic typing.
- You can override methods in derived classes to provide specialized behavior.

```
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}
```

6. **Abstraction:**

- Abstraction in JavaScript is achieved by defining classes and objects with only the essential characteristics and behaviors needed for a specific task.

```
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(`${this.make} ${this.model} is starting.`);
  }
}
```

7. **Encapsulation:**

- JavaScript allows you to encapsulate data and methods within objects to restrict access and maintain data integrity.

```
class BankAccount {
  #balance = 0; // Private field
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
  }
  get balance() {
    return this.#balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log('Insufficient funds.');
    }
  }
}
```

JavaScript is an object-oriented programming language that supports the key OOP concepts like objects, classes, inheritance, encapsulation, polymorphism, abstraction, and more. While its implementation may differ from classical OOP languages, it provides a flexible and dynamic approach to building object-oriented software.

<hr style="background-color: red";/>

# What is function over writing in javascript

- Function overriding, also known as method overriding, is a concept in object-oriented programming (OOP) where a subclass provides a specific implementation of a method that is already defined in its superclass (parent class). This allows the subclass to provide its own version of the method while inheriting the characteristics and structure of the superclass's method.

In JavaScript, you can achieve function overriding when working with classes and inheritance.

```
class Animal {
  makeSound() {
    console.log('Generic animal sound');
  }
}

class Dog extends Animal {
  // Overriding the makeSound method
  makeSound() {
    console.log('Woof! Woof!');
  }
}

class Cat extends Animal {
  // Overriding the makeSound method
  makeSound() {
    console.log('Meow');
  }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.makeSound(); // Outputs: Woof! Woof!
myCat.makeSound(); // Outputs: Meow
```

In this example:

- We have a base class Animal with a method **_makeSound()_**, which is a generic animal sound.

- We create two subclasses, **_Dog_** and **_Cat_**, which both extend the Animal class.

- In each subclass, we override the **_makeSound_** method with their own implementations. This is function overriding.

- When we create instances of **_Dog_** and **_Cat_** and call the **_makeSound_** method on them, they produce their specific sounds, demonstrating the overridden behavior.

Function overriding allows you to create specialized behavior for subclasses while maintaining a common interface defined in the superclass. It's a fundamental concept in object-oriented programming and is useful for creating more flexible and extensible code.

<hr style="background-color: red";/>

# What is CGI programming ?

- **_"CGI programming"_** typically refers to using JavaScript in the server-side environment to create Common Gateway Interface (CGI) scripts. CGI is a protocol that allows web servers to execute scripts or programs on the server in response to client requests. These scripts can generate dynamic web content, process form data, and perform various server-side tasks.

- While JavaScript is more commonly associated with client-side web development (running in web browsers), it can also be used on the server-side, primarily through platforms like Node.js. When JavaScript is used for CGI programming, it can be used to process incoming HTTP requests, generate dynamic HTML, interact with databases, and perform other server-side tasks.

Here's a basic example of how you can use JavaScript with Node.js to create a simple CGI script:

```
// Import the required modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from a CGI script written in JavaScript!</h1>');
  res.end();
});

// Listen on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

In this example:

1. We use the Node.js http module to create an HTTP server.

2. The server listens for incoming HTTP requests and responds with a simple HTML message.

3. When a client (e.g., a web browser) makes a request to the server, this JavaScript code is executed on the server, and the response is sent back to the client.

This is a basic illustration of CGI programming with JavaScript on the server-side using Node.js. More complex CGI scripts can handle form submissions, interact with databases, and perform other server-side tasks, making them a versatile tool for web application development.

<hr style="background-color: red";/>

# What is the difference between map and set in javascript.

- In JavaScript, Map and Set are both data structures that allow you to store collections of values, but they serve different purposes and have distinct characteristics. Here are the key differences between Map and Set:

### 1. Purpose:

- **_Map:_**
  A Map is a collection of key-value pairs where each key is unique.
  It's used for associating values (the "values") with keys, similar to objects but with more flexible key types.
- **_Set:_**
  A Set is a collection of unique values, where each value can only appear once.
  It's used for storing and managing a list of distinct elements, similar to an array but **_without duplicate_** values.

### 2. Key Characteristics:

- **_Map:_**
  Each entry in a Map consists of a key-value pair.
  The keys in a Map can be of any data type, including objects, functions, and primitive types (e.g., strings, numbers).
  Keys in a Map can be compared for equality using the === operator.
  Iterating over a Map provides access to both keys and values in a predictable order.

- **_Set:_**
  A Set stores a collection of unique values.
  Values in a Set can be of any data type.
  Values in a Set are automatically deduplicated, meaning duplicate values are not allowed.
  Iterating over a Set provides access to values only, not keys, and the order of iteration may differ from insertion order.

### 3. Usage:

- **_Map:_**
  Useful when you need to associate values with specific keys or when you want to store data that has a clear mapping between keys and values.
  Can be used to solve problems where you need to look up values using keys, such as dictionaries or caches.
- **_Set:_**
  Ideal for maintaining collections of unique elements, such as unique identifiers, unique user IDs, or removing duplicates from an array.
  Can be used to efficiently check for the existence of a specific value without worrying about duplicates.

### 4. Methods:
Both Map and Set have various methods to manipulate and retrieve data. However, the methods they provide are tailored to their specific use cases. Some common methods include:

<hr style="background-color: red";/>

# what is spread operator? 
The spread operator (...) is a feature in JavaScript that allows you to spread the contents of an iterable (e.g., an array or an object) into another iterable or as function arguments. It is a versatile and powerful tool used for various operations, including copying, merging, and unpacking elements or properties.

1. **Array Spreading:**
You can use the spread operator to create a new array by copying the elements from an existing array or combining multiple arrays.
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2]; // Combining arrays
const copyOfArray = [...arr1]; // Copying an array

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
console.log(copyOfArray);    // Output: [1, 2, 3]

```

2. **Object Spreading (ES9 and later):**
You can use the spread operator to create a new object by copying the properties from an existing object or merging properties from multiple objects.

```
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const combinedObject = { ...obj1, ...obj2 }; // Merging objects
const copyOfObject = { ...obj1 }; // Copying an object

console.log(combinedObject); // Output: { a: 1, b: 3, c: 4 }
console.log(copyOfObject);    // Output: { a: 1, b: 2 }
```
3. **Function Arguments:**
You can use the spread operator to pass the elements of an array as individual arguments to a function

```
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // Passing array elements as arguments

console.log(result); // Output: 6
```

4. **Cloning Objects (Shallow Copy):**
You can use the spread operator to create a shallow copy of an object, preserving its structure but not deeply nested objects.
```

```