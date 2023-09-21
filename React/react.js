// create context
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState("Hello, world");
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

// parent component
import { useData } from "./DataContext";
import ChildComponentA from "./ChildeComponent";

function ParentComponent() {
  const { data } = useData();
  return (
    <div>
      <ChildComponentA />
    </div>
  );
}

const element = React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", null, "Hello, world"),
  React.createElement("p", null, "this is react app")
);

import React from " react ";
import ReactDOM from " react -dom ";

export default App = () => {
  const bookArr = [
    { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien" },
  ];
  return (
    <>
      <h2>My favorite books</h2>
      <ul>
        {bookArr.map((book) => (
          <li key={book.id}>
            <h4>{book.title}</h4>
            <h6>{book.author}</h6>
          </li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById(" root "));

class HelloWorld extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}

const HelloWorld = () => <h1>Hello world</h1>;

import React from "react";

class ClassComponent extends React.Component {
  render() {
    return <h1> Hello from Class Component !</h1>;
  }
}

export const ArrowFunctionComponent = () => {
  return <h1> Hello from Arrow Function Component !</h1>;
};

import ArrowFunctionComponent from "./react.js";
import ClassComponent from "./react.js";
import React from 'react'

export const App = () => {
  return (
    <>
      <ClassComponent />
      <ArrowFunctionComponent />
    </>
  );
};

// ? right 
import React from 'react';

// Class Component
class ClassComponent extends React.Component {
  render() {
    return <h1>Hello from Class Component!</h1>;
  }
}

// Arrow Function Component
const ArrowFunctionComponent = () => (
  <h1>Hello from Arrow Function Component!</h1>
);

// Main App Component
function App() {
  return (
    <div>
      <h1>Main App Component</h1>
      <ClassComponent />
      <ArrowFunctionComponent />
    </div>
  );
}

// export default App;


// app
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "Divyanshi manral",
        age:"21"
      }
    }
  }
  render() {
    return (
      <div>
        <h1>My app</h1>
        <Profile user={this.state.user}/>
      </div>
    )
  }
}

// profile component 
class Profile extends React.Component{
  render() {
    const {user} = this.props;
    return (
      <div>
        <h1>User Profile</h1>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </div>
    )
  }
}

// export App;

// const UserProfile = ({username, age }) => {
//   return (
//     <>
//     <p>{username}</p>
//     <p>{age}</p>
//     </>
//   )
// }

// import {useState} from 'react'
// const Counter = () => {
//   const [count, setCount] = useState(0)
//   const handleIncrement = () => {
//     setCount(count + 1)
//   }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={handleIncrement}>increment</button>
//     </>
//   )
// }

// export Counter;

// import React, {Component} from 'react'
// class Counter extends Component{
//   constructor(){
//     super();
//     this.state = {
//       count : 0,
//     }
//   }

//   incrementCount = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   render() {
//     return (
//       <div>
//         <h1>Counter</h1>
//         <p>Count is: {this.state.count}</p>
//         <button onClick={this.incrementCount}>increment</button>
//       </div>
//     )
//   }
// }

// export default Counter;
import React, {useState} from 'react'
const ParentComponent = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <>
    <ChildComponent count={count} incrementCount={incrementCount}/>
    </>

  )
}
const ChildComponent = ({count, incrementCount}) => {
  return (
    <>
    <p>{count}</p>
    <button onClick={incrementCount}>increment</button>
    </>
  )
}
