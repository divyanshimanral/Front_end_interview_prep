# Everything about different features of React:

- Virtual DOM:
  React utilizes virtual DOM, an in-memory representation of the actual browser DOM. When the state of a component changes, React creates a new virtual DOM representation and compares it with the previous one. (To increase performance)
- View-oriented: React is primarily concered with the view layer of an application. It provides a declarative way to build UI components and manages the rendering of those components directly.
- Unidirectional data flow: React follows a uni-directional data flow, where the data flows in a single direction from parent to child components. This promotes a predictable and easier-to-manage data flow and helps in debugging and understanding the application's state.
- Component-based: React encourages a component based architecture, where UIs are broken down into modular and reusable components. Components can be composed and nested to create complex UI structure.

<hr style="background-color: red";/>

# What is virtual DOM?

<div style="display:'flex'; align-item:'center';">
<img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sWfjl94Bnshi1kewFCL0gg.png"/>
</div>

The Virtual DOM is an abstraction of the Real DOM, created and maintained by JavaScript libraries such as React. The Virtual DOM is a lightweight copy of the Real DOM, which allows for faster updates and improved performance. When a user interacts with a web page, React updates the Virtual DOM, compares it with the previous version, and only updates the Real DOM with the necessary changes. This process is known as Reconciliation.
<a href="https://medium.com/@surksha8/virtual-dom-and-real-dom-understanding-the-differences-da8f3fab4261">for more </a>

- Finally, the Virtual DOM is highly flexible and can be used with any programming language that can run JavaScript. In contrast, the Real DOM is tightly coupled with the browser and can only be manipulated using JavaScript.

- Data reconcilation is represented as a phase of verification of records during data migration. In this phase, target data is compared with source information to provide that the migration structure is assigned data.

<hr style="background-color: red";/>

# What is prop and state?

- Prop is read-only data that is passed from parent to child component and whenever there is a change in the properties, or props, the child re-renders.
  Here's a list of common data types and values that can be passed as props in React:

1.  **Primitives**:

    - Strings
    - Numbers
    - Booleans

    `<MyComponent name="John" age={30} isActive={true} />`

2.  **Functions**:

    - You can pass functions as props to allow child components to communicate with and invoke functions in their parent components.

    `<Button onClick={handleClick} />`

3.  **Objects:**

    - JavaScript objects can be passed as props, allowing you to send complex data structures to child components.

    `<PersonInfo person={{ name: "Alice", age: 25 }} />`

4.  **Arrays:**

    - Arrays of data can be passed as props when you want to send lists or collections of items to child components.

    `<ItemList items={['item1', 'item2', 'item3']} />`

5.  **React Elements:**

    - You can pass React elements (components) as props to other components, allowing for the composition of complex user interfaces.

    `<Modal content={<CustomComponent />} />`

6.  **Children (Special Prop):** - The children prop is a special prop that allows you to pass and render child elements or components within a parent component.

    ```
    <Container>
     <Header />
     <Content />
    </Container>
    ```

7.  **Custom Data:**

- You can pass custom data types, such as enums or constants, as props to provide configuration or specific behavior to child components.
  `<FilteredList data={data} filterType={FilterTypes.DATE} />`

8. **Functions as Props (Callback Props):**

- You can pass callback functions as props to child components to allow them to send data or trigger actions in the parent component.

```
<UserForm onSubmit={handleSubmit} />
```

9. **Conditional Props:**

- You can pass props conditionally based on certain criteria or logic, allowing child components to adapt their behavior or appearance.

```
<Notification type={unread ? 'new' : 'read'} />
```

10. **Props from State:**

- Props can also be derived from the state of a parent component and passed down to child components.

```
const { username, email } = this.state;
return <UserProfile username={username} email={email} />;
```

In React, props provide a way to make your components reusable and configurable. They allow you to create a hierarchy of components where data and behavior can be effectively passed down the component tree, promoting a modular and maintainable code structure.

<br>

- The state is internal to a component. When you make a change in state there is a change in that component. However it also happens that you pass the state as a prop (since States are transferred as prop from parent) to the child component so on the state change child component also get re-rendered.
<hr style="background-color: red";/>

# Differentiate between Server and client Side rendering in react?

- It simply means that in React, you can render your entire HTML (the entire markup) to the server-side without coming to the client. Even though the whole markup is written in JavaScript, you donot need to come in the client. You can render it to the server-side through the Node.js engine. Now, What's its benefits? It helps in getting better SEO, and the first render in which you can see whole visual, is very fast. This is used in website where the data is heavy and whenever SEO friendlyness is necessary, like e-commerce, news websites, whenever there are such a website running in React, which are content heavy, in there server side rendering becomes necessary. You can see client side rendering like in Outlook is an app, like teams, slack, like figma. In all these examples, you donot need sever-side rendering because all the data can come to the client and be rendered well. And SEO is not required in this, this is not content heavy and it is very much personalized. Theres is no SEO channeling on your email. So client side rendering is for app and server side rendering is for data heavy websites is what we go with when we use react.

<hr>

- Server-side rendering (SSR) and client-side rendering (CSR) are two approaches to rendering web pages in React applications. They differ in how and when the rendering process occurs.

**Server-Side Rendering (SSR):**

- In SSR, the initial rendering of the web page is done on the server side, and a fully formed HTML page is sent to the client's browser. This means that when the user first accesses a web page, they receive a fully rendered page from the server, which includes content and markup.

**Advantages of SSR:**

1. **_Improved SEO_**: Search engines can crawl and index SSR pages more easily because the content is present in the initial HTML response.

2. **_Faster Initial Load_**: Users see content sooner because the server sends a complete HTML page.

3. **_Performance on Low-End Devices_**: SSR can be more performant on low-end devices because less client-side processing is required.

Example of Server-Side Rendering:

```
// Server-side code
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');

const app = express();

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

// Client-side code
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, SSR!</h1>
    </div>
  );
}

export default App;
```

**Client-Side Rendering (CSR):**

- In CSR, the initial HTML page sent from the server is minimal and typically includes JavaScript bundles. The actual rendering of the content happens on the client side using JavaScript. This approach provides a more interactive and dynamic user experience because subsequent page updates do not require full-page reloads.

**Advantages of CSR:**

1. **_Fast Navigation_**: Once the initial page loads, navigation within the app is fast because only data needs to be fetched and components re-rendered, not the entire HTML page.

2. **_Reduced Server Load_**: The server doesn't have to render full HTML pages for every request, reducing server load.

**Example of Client-Side Rendering:**

```
// Server-side code (minimal HTML)
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>CSR Example</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

// Client-side code
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

**When to Use SSR vs. CSR:**

- Use SSR when you need better SEO or want to optimize initial page load times.
- Use CSR when you want to build highly interactive and dynamic web applications, and you're willing to accept the trade-offs of a potentially slower initial load.

In some cases, a hybrid approach called "Server-Side Rendering with Client-Side Hydration" can be used, where SSR is employed initially, and then the client-side takes over for subsequent interactions, combining the benefits of both approaches.

<hr style="background-color: red";/>

# What is refs in react?

- react makes its own DOM and you can not directly access the DOM. Whatever you have to change in it, you do it through state or props, through data, not directly accessing.
- In React, refs (short for references) are a way to access and interact with DOM elements or React components directly. They provide a way to get a reference to a specific element/component in the rendered output and then interact with it imperatively. While refs can be useful in certain situations, they are not advised to be used more often, and here's why, along with examples:
- 1. **Imperative Code**: React is designed to be declarative, meaning you describe what your UI should look like based on the application state, and React takes care of updating the DOM to match that state. refs introduce an imperative approach to interacting with the DOM, which goes against the typical React flow. This can make your code less predictable and harder to reason about.
  2. **Limited Reusability**: Code that heavily relies on refs tends to be less reusable. Since refs are tied to specific DOM elements or components, it can be challenging to use the same component in different contexts without modifying the component itself.
  3. **Testing Difficulty**: Code that uses refs can be harder to test. Unit testing components is more straightforward when you can assert the rendered output based on props and state, rather than trying to interact with elements directly using refs.
  4. **Potential Memory Leaks**: If refs are not managed properly, they can lead to memory leaks. For example, if a ref holds a reference to a DOM element that is unmounted, it can prevent the element from being garbage collected, which can lead to memory issues in your application.
  5. **Breaks the React Model**: React's core principle is the virtual DOM, which allows it to efficiently update the real DOM when state or props change. refs can bypass this virtual DOM diffing process and lead to unexpected behavior if not used carefully.

  Instead of using refs in most cases, you should strive to follow a more React-friendly approach:

  1. **Use State and Props**: Whenever possible, manage your component's behavior and appearance through state and props. React components should be driven by data and state changes.
  2. **Event Handling**: Use event handlers to respond to user interactions. React provides a clean and declarative way to handle events.
  3. **Conditional Rendering**: If you need to conditionally render elements, use conditional logic within your JSX to determine what to render.
  4. **Lifting State**: If you need to share data between components, consider lifting the shared state to a common ancestor and passing it down as props.

<hr style="background-color: red";/>

# What is React fiber?

- React Fiber is an internal mechanism in React that enables asynchronous rendering and helps React manage its updates more efficiently. It's a way for React to work on smaller tasks and interrupt them if something more important comes up, like handling user interactions or animations.

**BENEFITS**

1. **Improved Responsiveness**: React Fiber helps maintain a responsive user interface, even when dealing with heavy computations or rendering tasks.

2. **Smoother Animations**: It enables smoother animations and transitions by allowing React to interrupt rendering tasks to prioritize animations and user interactions.

3. **Incremental Rendering**: Fiber can update parts of the UI without having to re-render the entire component tree, making rendering more efficient.

4. **Better Error Handling**: It enhances error handling and debugging capabilities by isolating errors and providing more meaningful error messages.

5. **Support for Concurrent Mode**: React Fiber is the foundation for React's Concurrent Mode, which allows rendering tasks to be more effectively scheduled, further improving performance in high-load applications.

**Why It Came Into Play:**

React Fiber was introduced to address performance bottlenecks and improve the user experience in applications with complex UIs. It became essential as React applications grew in complexity and needed more efficient ways to handle rendering and updates.

**When to Use It:**

You don't directly use React Fiber in your code; it's an internal implementation detail of React. However, you benefit from it whenever you use React, especially in situations where your app has a lot of dynamic content, animations, or interactions. It shines in applications with large component trees and real-time updates.

For example, consider a social media feed that continuously updates with new posts and comments. React Fiber helps maintain a smooth user experience as new content arrives without causing the app to freeze or slow down.

In summary, React Fiber is an essential part of React's architecture that helps keep your apps responsive and efficient, especially in scenarios with complex user interfaces and frequent updates. It's not something you directly code with but rather a behind-the-scenes magic that makes your React apps perform better.

<hr style="background-color: red";/>

# Everything you need to know about useEffect hook.

The useEffect hook is a fundamental part of React, a popular JavaScript library for building user interfaces. It's used for handling side effects in functional components. Side effects can include data fetching, DOM manipulation, setting up subscriptions, and more.

<h2>Basic useEffect Usage</h2>
Here's the basic syntax of the useEffect hook:

```
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Code to run when component mounts (similar to componentDidMount)**
    // You can perform side effects here

    // Cleanup function (optional)
    return () => {
      // Code to run when component unmounts (similar to componentWillUnmount)
      // This is where you can clean up resources, like event listeners or timers
    };
  }, [dependencies]);

  // Rest of the component logic
}
```

Now, let's dive into the key aspects of useEffect:

1. **Mounting, Updating, and Unmounting Effects**

- **Mounting**: The function passed to useEffect is executed after the component is rendered for the first time, similar to componentDidMount in class components. This is where you can perform tasks like data fetching.

- **Updating**: If you provide a dependency array (explained later), the effect will run whenever any of the dependencies change. This is useful for updating the component in response to changes in props or state.

- **Unmounting**: If you return a cleanup function from the effect, it will be executed when the component unmounts, similar to componentWillUnmount. This is where you can clean up resources to avoid memory leaks.

2. **Dependencies Array**

The second argument to useEffect is an array of dependencies. It specifies when the effect should run. If the dependencies are empty, the effect runs only after the initial render (component mounting). If dependencies are provided, the effect runs when any of the listed dependencies change.

```
useEffect(() => {
  // This effect runs after every render
}, []);

useEffect(() => {
  // This effect runs only when 'count' changes
}, [count]);
```

3. **Cleanup Function**

If you return a function from the effect, React will execute it when the component unmounts or when the effect is about to run again (before the new effect). This is where you can clean up resources like event listeners or timers to prevent memory leaks.

```
useEffect(() => {
  // This effect runs on mount
  window.addEventListener('resize', handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

4. **Use Cases and Scenarios**

Here are common scenarios and use cases for useEffect:

- **Data Fetching**: Fetching data from an API when the component mounts.

```
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // Handle the data
  };

  fetchData();
}, []);
```

- **State Changes**: Reacting to changes in component state or props.

```
useEffect(() => {
  // Code to run when 'count' changes
  // e.g., updating a chart based on 'count'
}, [count]);
```

- **Subscriptions**: Setting up and tearing down subscriptions or event listeners.

```
useEffect(() => {
  const subscription = someObservable.subscribe((data) => {
    // Handle incoming data
  });

  return () => {
    // Clean up the subscription
    subscription.unsubscribe();
  };
}, []);
```

- **Document Title**: Dynamically updating the document title.

```
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

- **Animations**: Managing animations, transitions, or timing.

```useEffect(() => {
  const timer = setTimeout(() => {
    // Animation or timing logic
  }, 1000);

  return () => {
    clearTimeout(timer);
  };
}, []);
```

- **Network Requests**: Handling network requests and responses.

```
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      // Handle the data
    } catch (error) {
      // Handle errors
    }
  };

  fetchData();
}, []);
```

Understanding useEffect and its various use cases is essential for building robust and responsive React applications.

<hr style="background-color: red";/>

# Prop drilling

Prop drilling, also known as "prop passing," is a common issue in React where you need to pass data from a parent component through one or more intermediary (child) components to reach a deeply nested child component that needs the data. It becomes a problem when the data needs to be accessed by a component deep in the component tree, and you have to pass the same props through several levels of components, making the code less maintainable and harder to understand.

Let's illustrate this with an example:

```
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponentA from './ChildComponentA';

function ParentComponent() {
  const [data, setData] = useState('Hello, World');

  return (
    <div>
      <ChildComponentA data={data} />
    </div>
  );
}

export default ParentComponent;
```

```
// ChildComponentA.js
import React from 'react';
import ChildComponentB from './ChildComponentB';

function ChildComponentA({ data }) {
  return (
    <div>
      <ChildComponentB data={data} />
    </div>
  );
}

export default ChildComponentA;
```

```
// ChildComponentB.js
import React from 'react';
import ChildComponentC from './ChildComponentC';

function ChildComponentB({ data }) {
  return (
    <div>
      <ChildComponentC data={data} />
    </div>
  );
}

export default ChildComponentB;
```

```
// ChildComponentC.js
import React from 'react';

function ChildComponentC({ data }) {
  return <div>{data}</div>;
}

export default ChildComponentC;
```

In this example, we want to display the data prop in ChildComponentC, but we have to pass it through ChildComponentA and ChildComponentB, even though those components don't use the data prop themselves. This is prop drilling, and it can make your code harder to maintain and refactor, especially when you need to add or remove components in the middle.

## Solving Prop Drilling with Context API

One way to solve the prop drilling problem is by using React's Context API. Context allows you to share data across the component tree without manually passing it through every intermediate component.

Here's how you can use Context to refactor the above example:

```
// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState('Hello, World');

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
```

In this code, we create a DataContext with createContext and provide a DataProvider component that sets up the data state. We also define a useData custom hook that allows components to access the data.

Now, you can use the useData hook to access the data without prop drilling:

```
// ParentComponent.js
import React from 'react';
import { useData } from './DataContext';
import ChildComponentA from './ChildComponentA';

function ParentComponent() {
  const { data } = useData();

  return (
    <div>
      <ChildComponentA />
    </div>
  );
}

export default ParentComponent;

// ChildComponentA.js
import React from 'react';
import ChildComponentB from './ChildComponentB';

function ChildComponentA() {
  return (
    <div>
      <ChildComponentB />
    </div>
  );
}

export default ChildComponentA;
```

Now, ChildComponentA and ChildComponentB don't need to accept and pass the data prop since they can directly access it via the useData hook. This makes your code more maintainable and avoids unnecessary prop drilling.

<hr style="background-color: red";/>

# What is component in react. Explain?

React is a popular JavaScript library for building user interfaces, and components are a fundamental concept in React.

## What is a Component in React?

In React, a component is a reusable, self-contained building block that encapsulates a part of the user interface (UI) and its behavior. Components can be thought of as isolated, independent units that can be composed together to build complex user interfaces. Components can represent UI elements like buttons, forms, headers, or even entire sections of a web page.

## Key Characteristics of React Components

1. **Reusability**: Components are designed to be reusable, which means you can use the same component multiple times throughout your application.

2. **Encapsulation**: Components encapsulate their logic and UI, making it easier to manage and maintain your code.

3. **Composition**: Components can be composed together to create more complex UI structures. You can nest components within other components.

## Types of React Components

There are two main types of React components:

1. **Functional Components (also known as Stateless Components)**: These are JavaScript functions that accept props as input and return React elements to describe the UI. They are simpler and easier to read.

- A stateless functional component, as the name suggests, doesn't manage any internal state. It relies solely on the props passed to it and returns JSX based on those props. These components are also known as "dumb" or "presentational" components because they are focused on rendering UI based on the data they receive.

```
import React from 'react';

function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
}
```

2. Stateful functional components are functional components that use the useState hook or other hooks to manage and maintain internal state. This allows them to re-render and update based on changes to their state. Stateful functional components are also known as "smart" or "container" components because they can manage and control the logic of a specific part of the application.

```
import React, { useState } from 'react';

const Counter = () => {
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
};

export default Counter;
```

2. **Class Components (also known as Stateful Components)**: These are JavaScript classes that extend React.Component. They have their own internal state and can handle more complex logic.

Example of a class component:

```
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

## Why Are Components Unique?

React components are unique because they promote a declarative and reusable approach to building user interfaces. Here's why they stand out:

1. **_Declarative_**: React components allow you to declare what the UI should look like based on the current state and props, rather than imperatively manipulating the DOM.

2. **_Reusability_**: Components can be reused across different parts of your application, reducing redundancy in your code.

3. **_Composability_**: You can easily compose small, focused components to create complex UIs, promoting modularity and maintainability.

4. **_One-Way Data Flow_**: React enforces a one-way data flow, making it easier to understand how data changes propagate through your application.

## Benefits of Using React Components

1. **_Modularity_**: Components promote code modularity, making it easier to develop, test, and maintain code

2. **_Reusability_**: Reusable components reduce development time and help maintain consistent UI patterns across an application.

3. **_Abstraction_**: Components abstract away complex DOM manipulations and provide a higher-level interface for building UIs.

4. **_State Management_**: Class components allow you to manage state, enabling dynamic and interactive user interfaces.

5. **_Ecosystem_**: React has a vast ecosystem of libraries, tools, and resources to enhance component development.

React components are the building blocks of a React application, and they play a crucial role in creating maintainable, modular, and reusable user interfaces.

<hr style="background-color: red";/>

# Why react so popular give me answer in points with concise explaination

React, a JavaScript library for building user interfaces, has gained immense popularity due to several key factors:

1. **Component-Based Architecture:**

- React promotes a component-based architecture, making it easy to break down complex UIs into smaller, reusable pieces. This modularity improves code organization and maintainability.

2. **Virtual DOM:**

- React utilizes a virtual DOM (Document Object Model) to optimize updates. It calculates the minimal set of changes required to update the actual DOM, reducing performance bottlenecks and improving efficiency.

3. **Declarative Syntax:**

- React's declarative syntax allows developers to describe how the UI should look based on its state, rather than imperatively defining each step. This makes code more predictable and easier to debug.

4. **Community and Ecosystem:**

- React has a vast and active community, leading to a rich ecosystem of open-source libraries, tools, and resources. Developers can find solutions and support readily available.

5. **React Native:**

- React Native extends React's principles to mobile app development, allowing developers to build cross-platform mobile apps using familiar technologies and a shared codebase.

6. **Performance Optimization:**

- React's use of a virtual DOM and efficient rendering strategies results in high performance, even for complex and dynamic user interfaces.

7. **Backed by Facebook:**

- React is maintained by Facebook and Instagram, which adds credibility and reassurance to developers and organizations.

8. **Strong Developer Tools:**

- React offers powerful developer tools (such as React DevTools) that aid in debugging and profiling React applications, making development more efficient.

9. **Component Reusability:**

- React components can be easily reused across different parts of an application or even in multiple projects, reducing development time and effort.

10. **Compatibility and Integration:**

- React can be gradually adopted into existing projects, and it plays well with other JavaScript libraries and frameworks, allowing for incremental migration.

11. **Large Adoption by Tech Giants:**

- Many tech giants, including Airbnb, Netflix, WhatsApp, and others, have adopted React for their web and mobile applications, further contributing to its popularity.

12. **Continuous Improvement:**

- React is actively maintained and evolves with regular updates and improvements, ensuring that it remains a modern and relevant technology.

<hr style="background-color: red";/>

# What are the usage of useMemo and useCallback hook?

The useMemo and useCallback hooks are used in React to optimize the performance of your components by memoizing values and functions. They are particularly helpful in scenarios where expensive calculations or unnecessary renders need to be avoided.

1. **useMemo Hook:**

- useMemo is used to memoize a value. It takes two arguments: a function that computes a value, and an array of dependencies. It will recompute the value only if one or more of the dependencies have changed.
- Use it when you want to avoid unnecessary recalculations of a value, especially in cases where the calculation is resource-intensive.

`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
`

2. **useCallback Hook:**

- useCallback is used to memoize a function. It takes two arguments: a callback function and an array of dependencies. It returns a memoized version of the function that only changes if one or more dependencies have changed.
- Use it when you want to avoid recreating function instances in child components, particularly in the context of passing functions as props.

```
const memoizedFunction = useCallback(() => {
  // Function logic here
}, [dependency1, dependency2]);

```

Here are some common use cases for each hook:

**useMemo Use Cases:**

- Memoizing Expensive Computations: Use useMemo to memoize the result of a costly computation so that it's not recalculated on every render.

`const result = useMemo(() => computeExpensiveValue(a, b), [a, b]);
`

- Caching Component Rendering: You can use useMemo to cache components, preventing them from being recreated on every render. This can be helpful in optimizing rendering performance.

`const MemoizedComponent = useMemo(() => <SomeComponent />, []);`

**useCallback Use Cases:**

- Optimizing Event Handlers: When passing functions as props to child components, use useCallback to ensure that the function reference remains stable, reducing unnecessary re-renders of child components.

```
const handleClick = useCallback(() => {
  // Handle click logic
}, [dependency1, dependency2]);

```

- Preventing Recreated Functions in Effects: Inside useEffect, use useCallback to memoize functions that are used as dependencies to prevent effects from running too often.

```
useEffect(() => {
  const handler = () => {
    // Effect logic
  };

  window.addEventListener("resize", handler);

  return () => {
    window.removeEventListener("resize", handler);
  };
}, [dependency1, useCallbackDependency]);

```

useMemo and useCallback are tools in React's optimization toolbox. They help improve performance by memoizing values and functions, respectively, and ensuring that they only update when necessary. Use them in scenarios where you need to fine-tune your component's performance.

<hr style="background-color: red";/>
