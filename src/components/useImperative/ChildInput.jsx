import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ChildInput = forwardRef(({}, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return (
    <>
      <div className="">
        <input ref={inputRef} placeholder="Type here..." />
      </div>
    </>
  );
});

export default ChildInput;
