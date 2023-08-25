import React, { useState } from "react";
import "./Counter.scss";

export const Counter = ({ children }) => {
  const [value, setValue] = useState(+children);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(+children);
  };

  return (
    <div className="content-box">
      <div className="controls">
        <button onClick={increment}>+</button>
        <p>{value}</p>
        <button onClick={decrement}>-</button>
      </div>
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
