## Splice methods

- The splice() method is a built-in JavaScript method that allows you to modify an array by adding or removing elements from it. It is a versatile method that can be used for various array manipulation tasks. The splice() method modifies the original array in place and returns an array containing the removed elements (if any). It takes three main arguments:

1. Start index: This is the index at which the modification will begin. It is required.

2. Number of elements to remove: This specifies how many elements to remove from the array starting from the start index. If you don't want to remove any elements, you can set this argument to 0.

3. Items to add (optional): You can provide one or more elements as arguments that will be inserted into the array at the start index.

Here's the basic syntax of the splice() method:

`array.splice(start, deleteCount, item1, item2, ...);
`

## Slice method

- The slice() method in JavaScript is used to extract a portion of an array and **create a new array** containing the extracted elements. It does not modify the original array; instead, it returns a new array with the selected elements. The slice() method takes one or two arguments:

1. Start index (optional): The index at which to begin extracting elements. If omitted, it starts from the beginning of the array. If the start index is negative, it counts from the end of the array (e.g., -1 refers to the last element).
2. End index (optional): The index at which to stop extracting elements. The slice() method will extract elements up to, but not including, this index. If omitted, it will extract all elements from the start index to the end of the array. Like the start index, if the end index is negative, it counts from the end of the array.

Here's the basic syntax of the slice() method:

`array.slice(start, end);`

## do arrow function have hoisitng?

- Arrow functions do not have their own "hoisting" in the same way that regular function declarations do. Hoisting refers to the behavior in JavaScript where function declarations and variable declarations are moved to the top of their containing scope during the compilation phase. This allows you to use a function or variable before it's declared in your code.

However, arrow functions are different in this regard:

1. No Function Hoisting: Arrow functions are not hoisted like function declarations. You cannot use an arrow function before it's defined in your code because arrow functions are not moved to the top of the scope.

2. Lexical Scope: Arrow functions capture the surrounding lexical context, which means they inherit the value of this and other variables from their containing scope. This behavior is known as "lexical scoping" or "lexical this."

## Difference between local storage and session storage

- localStorage and sessionStorage are two web storage options available in modern web browsers to store data on the client-side (i.e., in the user's web browser) for a particular website. While they share some similarities, they have important differences:

1. **Data Persistence:**

- localStorage: Data stored in localStorage persists even after the browser is closed. It has no expiration time and remains available until explicitly removed or cleared.
- sessionStorage: Data stored in sessionStorage is only available for the duration of the page session. It is cleared when the session ends, typically when the user closes the tab or browser.

2. **Storage Size:**

- localStorage: Typically has a larger storage capacity compared to sessionStorage. It's usually around 5-10 MB per domain, but the exact limit can vary between browsers.
- sessionStorage: Has a smaller storage capacity compared to localStorage, usually around 5-10 MB per domain, but again, the exact limit may vary between browsers.

3. **Scope:**

- localStorage: Data stored in localStorage is accessible across all tabs and windows from the same origin (i.e., same protocol, domain, and port). It is shared among all instances of the browser for the same website.
- sessionStorage: Data stored in sessionStorage is limited to the particular tab or window that created it. It is not accessible in other tabs or windows opened from the same site.

4. **Lifetime:**

- localStorage: The data stored in localStorage persists indefinitely unless explicitly removed by the web application or the user.
- sessionStorage: The data stored in sessionStorage only lasts for the duration of the page session. It is automatically cleared when the session ends.

5. **Use Cases:**

- localStorage: Typically used for storing data that should persist across sessions, such as user preferences, settings, or cached data.
- localStorage: Typically used for storing data that should persist across sessions, such as user preferences, settings, or cached data.

localStorage and sessionStorage are limited to storing data as strings. If you need to store complex data structures like objects or arrays, you'll need to convert them to JSON strings before storage and parse them when retrieving.

## 
