# ReactJs

ReactJs is a popular JavaScript library for building user interfaces. It is maintained by Facebook, and is widely used for building web applications, mobile apps, and other user interfaces. React allows developers to create reusable components, which can help make large applications easier to manage and maintain. It is designed to be efficient, declarative, and flexible, and can be used to create complex, dynamic user interfaces.

0. What is React?

**efficent**: React is like a smart worker that doesn't waste time doing unnecessary tasks. It efficiently updates only the parts of a web page that need to change, rather than redrawing the entire page. This makes your web applications run faster and use less computer power.
**declarative**:React lets you describe what you want your web page to look like, and it takes care of figuring out how to make it happen. It's like giving instructions and letting React handle the details. This makes your code easier to understand and maintain.
**flexible**: React doesn't force you to do things in a specific way. It gives you the freedom to organize your code the way that makes the most sense for your project. You can use other libraries and tools alongside React, making it adaptable to various situations.

- Reactjs is widely used javascript library for that was launched in 2011, maintined by facebook and is highly used for front-end development.
- React uses component-based apporach which ensures to help you build components that possess high reusablity.
- React is widely know for developing and desigining complex mobile user interfaces and web applications.

1. How does React work?

React creates a virtual DOM. When the state changes in a component it first runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.

2. What are the advantages of using React?

   - **Easy Component Rendering**: React makes it simple to understand how things appear on a web page. Imagine it's like following a recipe – you look at the "render" function to see how a part of your webpage is created.
   - **Readable Code with JSX**: React uses something called JSX, which is like a special way of writing code. It's a bit like using plain language to describe what you want on your webpage. This makes your code easy to read and understand, like reading a story.
   - You can render React on the server side. This improves SEO and performance.
   - It is easy to test.
   - You can use React with any framework you wish as it is only a view layer.

In a nutshell, React is a helpful tool for building web pages because it makes your code easy to understand, helps your website load faster, and plays nicely with other tools you might want to use

2.  What are the diadvantages of using React?
    There are some liitations of react that are:

    - Writing code is complicated as it uses JSX and inline templating formatting.
    - Beginners might find it hard to cope with the syntax and methods.
    - The library contains a huge repository of information, which might be overwhelming
    - React is a simple library and not a complete framework hence calls for dependencies

3.  What the difference between Angular and react?

    | FACTORS | ANGUALR | REACT |

    |----------|----------|----------|

    | Created by | Google | Facebook |

    | DOM| Real DOM | Virtual DOM |

    |Render support | Client side | Server side |

    |Archiecture | Full MVS support | only view aspect of MVC |

    |Data Binding | Unidirectional data binding | Two-way data binding |

4.  What is the difference between a Presentational component and a Container component?

    Presentational components are concerned with how things look. They generally receive data and callbacks exclusively via props. These components rarely have their own state, but when they do it generally concerns UI state, as opposed to data state.
    When your component just receives props and renders them to the page, this is a stateless component, for which a pure function can be used. These are also called dumb components or presentational components.
    Container components are more concerned with how things work. These components provide the data and behavior to presentational or other container components. They define actions and provide these as callbacks to the presentational components. They are also often stateful as they serve as data sources.

5.  What are the differences between a class component and functional component?

    - The class component uses ES6 class syntax, and it extends React components with a render method that returns React elements.

    - Functional components with hooks are purely JavaScript functions that also return React elements. Before the introduction of hooks, functional components were stateless.

6.  What is the difference between state and props?

    State is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

    Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Callback functions can also be passed in as props.

7.  What are the different lifecycle methods?

    - componentWillMount (deprecated) - this is most commonly used for App configuration in your root component.
    - componentDidMount - here you want to do all the setup you couldn’t do without a DOM, and start getting all the data you need. Also if you want to set up eventListeners etc. this lifecycle hook is a good place to do that.
    - componentWillReceiveProps (deprecated) - this lifecyclye acts on particular prop changes to trigger state transitions.
    - shouldComponentUpdate - if you’re worried about wasted renders shouldComponentUpdate is a great place to improve performance as it allows you to prevent a rerender if component receives new prop. shouldComponentUpdate should always return a boolean and based on what this is will determine if the component is rerendered or not.
    - componentWillUpdate (deprecated) - rarely used. It can be used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate (but no access to previous props).
    - componentDidUpdate - also commonly used to update the DOM in response to prop or state changes.
    - componentWillUnmount - enables you can cancel any outgoing network requests, or remove all event listeners associated with the component.

8.  componentDidMount: This method is called after a component is first rendered on the screen. It's a good place to set things up that require the DOM (the webpage) to be ready. For instance, if you want to fetch data from a server when your component loads, you can do it here.

```class MyComponent extends React.Component {
componentDidMount() {
  // This code will run after the component is displayed on the screen.
  // You can fetch data or set up things that rely on the DOM here.
 }

render() {
  // Your component's UI goes here.
 }
}
```

2. shouldComponentUpdate: This method helps in optimizing performance. It decides whether or not a component should re-render when it receives new props or state. If it returns true, the component will re-render; if false, it won't.

```
class MyComponent extends React.Component {
shouldComponentUpdate(nextProps, nextState) {
  // You can check the incoming props and state and decide if you want to re-render.
  if (this.props.someValue !== nextProps.someValue) {
    return true; // Re-render if 'someValue' changes.
  }
  return false; // Don't re-render otherwise.
 }

render() {
  // Your component's UI goes here.
 }
}

```

3. componentDidUpdate: This is called after a component has re-rendered. It's commonly used to update the DOM or do other tasks when the component's data changes.

```
class MyComponent extends React.Component {
componentDidUpdate(prevProps, prevState) {
  // This code runs after the component re-renders.
  // You can perform actions based on the previous props and state here.
 }

render() {
  // Your component's UI goes here.
 }
}

```

4. componentWillUnmount: This method is called just before a component is removed from the screen. It's a good place to clean up things like canceling network requests or removing event listeners to prevent memory leaks.

```
class MyComponent extends React.Component {
componentWillUnmount() {
  // This code runs right before the component is removed from the screen.
  // You can clean up resources like event listeners here.
  }

render() {
  // Your component's UI goes here.
  }
}
```

7. Explain React Hooks.
   Hooks let you use more of React’s features without having to use classes. The first hook that you will most likely encounter is useState. useState is a Hook that lets you add React state to function components. It returns an array with a getter and a setter.

The syntax looks like

```const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increment</button>;
```

The equivalent when using a class component would be.

```
this.state = {
    count: 0,
};

<button onClick={() => this.setState({count: this.state.count + 1})}>Increase Count</button>
```

The next hook you will most likely encounter is useEffect. The Effect Hook lets you perform side effects in function components. By passing an empty array as the second argument to useEffect is equivalent to using componentDidMount. If you pass a value to the array it will only call the useEffect function when the value in the array updates.

```
useEffect(() => {
    //do stuff when the component is mounts
},[])
```

8. Where in a React class component should you make an AJAX/API request?
   componentDidMount (useEffect) is where an AJAX request should be made in a React component. This method will be executed when the component mounts (is added to the DOM) for the first time. This method is only executed once during the component’s life. Importantly, you can’t guarantee the AJAX request will have resolved before the component mounts. If it doesn't, that would mean that you’d be trying to setState on an unmounted component, which would not work. Making your AJAX request in componentDidMount will guarantee that there is a component to update.

9. What are controlled components?
   In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. When a user submits a form the values from the mentioned elements are sent with the form. With React it works differently. The component containing the form will keep track of the value of the input in it's state and will re-render the component each time the callback function e.g. onChange is fired as the state will be updated. An input form element whose value is controlled by React in this way is called a controlled component.

10. What are refs used for in React?
    Refs are used to get reference to a DOM node or an instance of a component in React. Good examples of when to use refs are for managing focus/text selection, triggering imperative animations, or integrating with third-party DOM libraries. You should avoid using string refs and inline ref callbacks. Callback refs are advised by React.

It is similar to getElementById/ClassName/tag of vanilla javascript.

11. What is a higher order component?

A higher-order component is a function that takes a component and returns a new component. HOC's allow you to reuse code, logic and bootstrap abstraction. The most common is probably Redux’s connect function. Beyond simply sharing utility libraries and simple composition, HOCs are the best way to share behavior between React Components. If you find yourself writing a lot of code in different places that does the same thing, you may be able to refactor that code into a reusable HOC.

```
import React, { Component } from 'react';

// Define a Higher-Order Component (HOC) function
function withAuthentication(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: false,
      };
    }

    componentDidMount() {
      // Simulate a check for user authentication (you would use real logic here)
      const isAuthenticated = /* Your authentication logic here */ true;

      this.setState({ isAuthenticated });
    }

    render() {
      // If the user is authenticated, render the WrappedComponent
      if (this.state.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        // If not authenticated, show a message or redirect to a login page
        return <p>Please log in to access this content.</p>;
      }
    }
  };
}

// Create a regular component
class MyProtectedComponent extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the protected area!</h1>
        {/* Your protected content */}
      </div>
    );
  }
}

// Use the HOC to add authentication to the component
const AuthenticatedComponent = withAuthentication(MyProtectedComponent);

// Now, you can use AuthenticatedComponent in your app
```

12. What advantages are there in using arrow functions?

- Scope safety: Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). An arrow function does not create its own this, the this value of the enclosing execution context is used.
- Compactness: Arrow functions are easier to read and write.
- Clarity: When almost everything is an arrow function, any regular function immediately sticks out for defining the scope. A developer can always look up the next-higher function statement to see what the Object is.

13. How would you prevent a class component from rendering?
    Returning null from a component's render method means nothing will be displayed, but it does not affect the firing of the component's lifecycle methods.

If the amount of times the component re-renders is an issue, there are two options available. Manually implementing a check in the shouldComponentUpdate lifecycle method hook.

```
shouldComponentUpdate(nextProps, nextState){
  const allowRender = true;
  // Do some check here and assign decicison to allowRender
  return allowRender
}

```

Or using React.PureComponent instead of React.Component React.PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison. This enables you to avoid re-rendering the component with the same props and state.

14. When rendering a list what is a key and what is it's purpose?
    Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys. When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort. It is not recommend to use indexes for keys if the items can reorder, as that would be slow.

15. What is the purpose of `super(props)` ?
    A child class constructor cannot make use of this until super() has been called. Also, ES2015 class constructors have to call super() if they are subclasses. The reason for passing props to super() is to enable you to access this.props in the constructor.

16. What is JSX?

- JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React elements.
- You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.
- This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions.

17. What is equivalent of the following using React.createElement?

```
const element = <h1 className = 'greeting>Hello, world</h1>

// without JSX
const element = React.createElement(
    "h1",
    {className: "greeting"},
    "Hello, world"
);
```

18. What is redux?

- The basic idea of redux is that the entire application state is kept in a single store. The store is simply a javascript object.
- The only way to change the state is by sending actions from your application and then writing reducers for these actions that modify the state.
- The entire state transition is kept inside reducers and should not have any side-effects.

19. What is a store in redux?
    The store is a javascript object that holds application state. Along with this it also has the following responsibilities:

- Allows access to state via getState();
- Allows state to be updated via dispatch(action);.
- Registers listeners via subscribe(listener);.
- Handles unregistering of listeners via the function returned by subscribe(listener).

20. Difference between action and reducer.

- Actions are plain javascript objects.
- They must have a type indicating the type of action being performed.
- In essence, actions are payloads of information that send data from your application to your store

A reducer is simply a pure function that takes the previous state and an action, and returns the next state.

21. What is Redux Thunk used for?

- Redux thunk is middleware that allows you to write action creators that return a function instead of an action.
- The thunk can then be used to delay the dispatch of an action if a certain condition is met. This allows you to handle the asynchronous dispatching of actions.

22. Write a custom hook which can be used to debounce user's input.

```
const useDebounce = (value, delay) => {
    const [debounceValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(timeout)
        }
    },[value])
    return debounceValue;
}

for example : -
const Counter = () => {
    const [value, setValue] = useState(0)
    cosnt lastValue = useDebounce(value, 1000);
    return {
        <div>
        <p>Current Value: {value} | Debounced value: {lastValue}</p>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        </div>
    }
}
```

23. Write a custom hook to copy text to clipboard.

```
// hook
function useCopyToClipboard(content) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard
      .writeText(content)
      .then(() => setIsCopied(true))
      .then(() => setTimeout(() => setIsCopied(false), 1250))
      .catch((err) => alert(err));
  }, [content]);
  return [isCopied, copy];
}

// usage
export default function App() {
  const [isCopied, copy] = useCopyToClipboard("Text to copy!");
  return <button onClick={copy}>{isCopied ? "Copied!" : "Copy"}</button>;
}

```

24. How to Use the 'useId' Hook to generate unique ids.

- useId does not take any parameters.

- useId returns a unique ID string associated with this particular useId call in this particular component.

```
//usage
import { useId } from "react";

const App = () => {
  const id = useId();

  return (
    <form>
      <label htmlFor={`email-${id}`}>Email</label>
      <input type="text" id={`email-${id}`} name="email" />

      <label htmlFor={`password-${id}`}>Password</label>
      <input type="password" id={`password-${id}`} name="password" />
    </form>
  );
};

// 🔴 Bad Practise - Don't use for key
const id = useId();

return posts.map((post) => <article key={id}>...</article>);
```

25. How to validate Props in React?

- We can use 'prop-types' package
- Earlier, till React v15.5 this was there as part of React iteslf

```
import PropTypes from "prop-types";

function MyComponent({ name }) {
  return <div>Hello, {name}</div>;
}

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
```

26. Give a practical example of Higher Order Component in react.

- Show a loader while a component waits for data

30. Why do React component names have to start with capital letters?
    In JSX, lowercase tag names are considered to be HTML tags. However, lowercase tag names with a dot (property accessor) aren't.

- `<person />` compiles to React.createElement('person') (html tag)
- `<Person />` compiles to React.createElement(Person)
- `<obj.person />` compiles to React.createElement(obj.person)

31. What is the difference between npx and npm?

- NPM is a package manager and can be used to install node.js packages.
- NPX is a tool to execute node.js packages.
  It doesn't matter whether you installed that package globally or locally. NPX will temporarily install it and run it. NPM also can run packages if you configure a package.json file.

So if you want to check/run a node package quickly without installing it - use NPX.

'create-react-app' is a npm package that is expected to be run only once in a project's lifecycle. Hence, it is preferred to use npx to install and run it in a single step.

32. How to set focus on an input field after component mounts on UI?

```
import React, { useEffect, useRef } from "react";

const SearchPage = () => {
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <div>
      <input ref={textInput} type="text" />
    </div>
  );
};

Copy
```
