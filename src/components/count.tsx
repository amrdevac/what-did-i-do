// src/Counter.tsx
import bambangCounter from "@/store/store";
import React from "react";

const Counter: React.FC = () => {
  // Mengambil state dan fungsi dari store
  const { count, increment, decrement, reset } = bambangCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
