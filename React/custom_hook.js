// ! custom hook writing: useCounter
import { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(10);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
};

function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div className="App">
      <h1>Welcome, to the website</h1>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
