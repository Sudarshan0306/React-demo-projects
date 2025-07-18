import React, { forwardRef, useImperativeHandle, useState } from "react";

const Modal = forwardRef(({}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;
  return (
    <>
      <div className="">
        <h2>Modal</h2>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </>
  );
});

export default Modal;
