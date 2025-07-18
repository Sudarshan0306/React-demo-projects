import React, { useCallback, useMemo, useState } from "react";
import ExpensiveComp from "./ExpensiveComp";

const MemoCallback = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  const expensiveValue = useMemo(() => {
    console.log("calculating expensive value");
    let total = 0;
    for (let i = 0; i < 1000000; i++) {
      total += i;
    }
    return total;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <h2>Expensive Value: {expensiveValue}</h2>
      <button onClick={() => setCount((c) => c + 1)}> Increment Count </button>
      <button onClick={() => setToggle((c) => !c)}> Toggle </button>
      <ExpensiveComp onButtonClick={handleClick} />
    </div>
  );
};

export default MemoCallback;
