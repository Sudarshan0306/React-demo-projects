import React, { memo } from "react";

const ExpensiveComp = memo(({ onButtonClick }) => {
  console.log("Expensive component rendered");

  return (
    <div>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
});

export default ExpensiveComp;
