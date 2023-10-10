# Content

1. Reconcilation
2. Class V/S Functional component
3. Hooks
4. Pure Component
5. HOC

## Reconcilation

- A proccess of tree comparison which is used by react to update the real DOM.

## differance between functional and class component

- Check here <a href="https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/">difference between functional and class component</a>

## Write your own custom hook

- PS(Problem statement): Implement a hook called UseCounter. This hook is responsible for returning below 4 values
- **counter**: current counter value
- **increment**: function to increment counter value
- **decrement**: function to decrement counter value
- **reset**: function to reset counter value
  <a href="./custom_hook.js">Check the custom hook from here</a>

## Before hook functional components were stateless?

- Before the introduction of hooks in React, functional components were primarily used for stateless or "dumb" components. Functional components were stateless by design, which means they couldn't manage their own internal state. Instead, they were used for rendering UI based on the props passed to them.
- Prior to React 16.8 (when hooks were introduced), if you needed to manage state or use lifecycle methods, you had to use class components. Class components had the ability to hold and modify their own state using this.state and manage component lifecycle using lifecycle methods like componentDidMount, componentDidUpdate, etc.

Here's a simple example of a stateless functional component before hooks:

```
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default MyComponent;

```

In the above code, MyComponent is a stateless functional component that takes a message prop and renders it. This component doesn't have its own state or lifecycle methods.

- With the introduction of hooks in React 16.8, functional components gained the ability to manage state and side effects. Hooks like useState, useEffect, useContext, and others allowed functional components to have the same capabilities as class components, making them more powerful and flexible.

Here's an example of a functional component using hooks to manage state:

```
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

In this example, the useState hook allows MyComponent to manage its own state, and the component can re-render when the state changes. This was not possible in stateless functional components before the introduction of hooks.


## Pure Component
- React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn;t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison

## HOC (Higher order component)
- HOC is a advance technique used in react for reusing component logic. HOC's are not part of the React API, per se. They are a pattern that emerges from React's compositional nature