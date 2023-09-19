# What is event loop in javascript?

**Javascript is a single threaded, non-blocking, asynchronous and concurrent language. It has a call stack, a heap, an event loop, a callback queue and some other api's and stuff**

<h3 style="color: yellow; text-align: center;">One call stack (single threaded programming language)</h3>

**<h3 style="color: red; text-align:center;">one thread == one call stack == one thing at a time</h3>**

An event loop is a fundamental concept in JavaScript that allows it to perform asynchronous operations efficiently. It's at the core of how JavaScript handles events, callbacks, and non-blocking operations. Here's a simplified explanation of how the event loop works:

1. **Call Stack**: JavaScript code is executed in a single-threaded environment, meaning it can only do one thing at a time. The call stack is a data structure that keeps track of the function calls currently being executed. When a function is called, it's added to the top of the stack, and when it returns, it's removed from the stack.

2. **Web APIs**: JavaScript has access to various Web APIs provided by the browser or the environment it's running in. These APIs can perform tasks like making HTTP requests, interacting with the DOM (Document Object Model), and setting timers. When you use functions like setTimeout or make an AJAX request, the work associated with these functions is offloaded to the Web APIs, allowing the JavaScript thread to continue running other code without waiting for these operations to complete.

3. **Callback Queue**: When asynchronous operations in the Web APIs are finished, they push their associated callbacks (functions to be executed when the operation is complete) onto the callback queue.

4. **Event Loop:** The event loop is responsible for constantly checking two things: the call stack and the callback queue. If the call stack is empty, and there are callbacks in the queue, the event loop will move those callbacks from the queue to the call stack for execution. This process continues, allowing JavaScript to handle asynchronous operations without blocking the main thread.

Here's a simple example of how this works with setTimeout:

```
console.log("Start");

setTimeout(function () {
  console.log("Timeout callback");
}, 1000);

console.log("End");

```

In this code, "Start" and "End" will be logged immediately because they are synchronous. The "Timeout callback" will be logged after approximately 1000 milliseconds because it's placed in the callback queue and executed when the call stack is empty.

Understanding the event loop is crucial for writing responsive and non-blocking JavaScript code, especially in scenarios where you need to handle user interactions, network requests, or other asynchronous operations.

<div  style="display: flex; align-item:center; justify-content:center;">
<img src="https://miro.medium.com/v2/resize:fit:828/1*iHhUyO4DliDwa6x_cO5E3A.gif" />
</div>

<br>
<hr style="background-color: red";/>

# Everything you need to know about Promises

Promises are a crucial concept in JavaScript for handling asynchronous operations. They provide a more structured and readable way to work with asynchronous code compared to callbacks.

<h2>Basics of Promises</h2>

A promise in JavaScript represents a value that might not be available yet but will be resolved at some point, either successfully or with an error. Promises have three states:

1. **Pending**: The initial state, representing that the operation is still ongoing.
2. **Fulfilled (Resolved)**: The operation completed successfully, and the promise holds a resolved value.
3. **Rejected**: The operation encountered an error, and the promise holds a reason for the failure.

<h3>Creating a Promise</h3>

You can create a promise using the Promise constructor. It takes a function with two parameters, resolve and reject, which are functions to either fulfill or reject the promise.

```
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., API call or file read)
  if (/* operation succeeds */) {
    resolve('Success data');
  } else {
    reject('Error reason');
  }
});
```

<h3>Promise Methods</h3>

1. **.then() and .catch()**: The .then() method is used to register callbacks to be executed when the promise is fulfilled. You can chain multiple .then() calls together.

```
myPromise
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

2. **.finally()**: The .finally() method is used to register a callback that will be executed regardless of whether the promise is fulfilled or rejected.

```
myPromise
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Promise completed, regardless of success or failure.');
  });
```

3. **Promise.all() :** Promise.all() takes an array of promises and returns a new promise that is fulfilled when all the promises in the array have been fulfilled or rejected if any of them are rejected.

```
const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');

Promise.all([promise1, promise2])
  .then((responses) => {
    // Handle both responses here
  })
  .catch((error) => {
    // Handle errors from any of the promises
  });
```

4. **Promise.race()** : Promise.race() takes an array of promises and returns a new promise that is settled (fulfilled or rejected) as soon as one of the promises in the array is settled.

```
const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');

Promise.race([promise1, promise2])
  .then((response) => {
    // Handle the first resolved promise
  })
  .catch((error) => {
    // Handle errors from the first rejected promise
  });
```

<h3>Use Cases for Promises</h3>

Promises are used in various scenarios where asynchronous operations are involved:

1. **HTTP Requests**: Fetching data from APIs.

```
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => {
    // Handle the fetched data
  })
  .catch((error) => {
    // Handle errors
  });
```

2. **Reading Files**: When working with files in a Node.js environment.

```
const fs = require('fs');

const readFilePromise = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise('file.txt')
  .then((content) => {
    // Handle the file content
  })
  .catch((error) => {
    // Handle file read errors
  });
```

3. **Timeouts and Delays**: Managing time-based operations.

```
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

delay(2000)
  .then(() => {
    console.log('Operation complete after 2 seconds');
  });
```

4. **Parallel Execution**: Performing multiple asynchronous operations concurrently.

```
const fetchData = (url) => {
  return fetch(url).then((response) => response.json());
};

const promises = [
  fetchData('https://api.example.com/data1'),
  fetchData('https://api.example.com/data2'),
  fetchData('https://api.example.com/data3'),
];

Promise.all(promises)
  .then((results) => {
    // Handle all results together
  })
  .catch((error) => {
    // Handle errors from any of the promises
  });
```

Promises provide a clean and readable way to work with asynchronous code in JavaScript, making your code more maintainable and easier to reason about.

<hr style="background-color: red";/>

# How does javascript works?

JavaScript is a versatile and powerful programming language used for web development.

1. **JavaScript Engine**

JavaScript code is executed by a JavaScript engine, which is present in web browsers (e.g., V8 in Chrome) and server-side environments (e.g., Node.js). The engine interprets and runs JavaScript code.

2. **Call Stack**

The call stack is a data structure used by the JavaScript engine to manage function calls and track where the program is in its execution. When a function is called, it is pushed onto the call stack. When it returns, it is popped off the stack.

```
function foo() {
  console.log("Hello from foo!");
}

function bar() {
  foo();
  console.log("Hello from bar!");
}

bar();
```

In this example, the call stack looks like this:

1. bar() is pushed onto the stack.
2. foo() is called from bar() and pushed onto the stack.
3. foo() returns and is popped off the stack.
4. bar() continues and logs its message, then returns and is popped off the stack.

5. **Memory Heap**

The memory heap is where objects, variables, and function closures are stored. Objects created in JavaScript are allocated memory on the heap.

```
const myObject = { name: "John", age: 30 };
```

myObject is stored on the memory heap.

4. **Event Loop**

JavaScript is single-threaded, meaning it can only execute one piece of code at a time. To handle asynchronous operations efficiently, JavaScript uses the event loop. The event loop continually checks the call stack and the message queue.

- **Call Stack**: JavaScript code is executed in the call stack.
- **Message Queue**: Asynchronous tasks, such as timers and network requests, place their callbacks in the message queue when they are ready to execute.

The event loop checks if the call stack is empty. If it is, it takes the first task from the message queue and pushes it onto the call stack for execution. This process continues, allowing JavaScript to handle asynchronous code without blocking the main thread.

5. **Callbacks and Promises**

Callbacks and promises are used for asynchronous programming in JavaScript.

- **_Callbacks_**: Functions that are passed as arguments to other functions and are executed when a task is complete.

```
function fetchData(url, callback) {
  fetch(url).then((response) => response.json()).then((data) => callback(data));
}

fetchData("https://api.example.com/data", (data) => {
  console.log(data);
})
```

- **_Promises_**: Objects representing a future value. They are more structured and provide a cleaner way to handle asynchronous operations.

```
function fetchData(url) {
  return fetch(url).then((response) => response.json());
}

fetchData("https://api.example.com/data")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

6. **Closures**

Closures are a powerful concept in JavaScript that allows functions to remember the scope in which they were created, even after that scope has exited.

```
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // Outputs 1
counter(); // Outputs 2
```

The inner function (function () { ... }) "closes over" the count variable, allowing it to retain its value between function calls.

7. **Memory Management**

JavaScript uses automatic memory management (garbage collection) to reclaim memory that is no longer in use. Developers do not need to manually deallocate memory.

8. **ES6 Features**

ES6 (ECMAScript 2015) introduced several important features to JavaScript, including arrow functions, classes, template literals, destructuring, and more. Familiarity with ES6 features is essential for modern JavaScript development.

<hr style="background-color: red";/>
