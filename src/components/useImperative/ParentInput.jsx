import React, { useRef } from "react";
import ChildInput from "./ChildInput";
import Modal from "./Modal";

const ParentInput = () => {
  const inputRef = useRef();
  const modalRef = useRef();
  return (
    <div>
      <ChildInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <Modal ref={modalRef} />
      <button onClick={() => modalRef.current.open()}>Open</button>
    </div>
  );
};

export default ParentInput;
