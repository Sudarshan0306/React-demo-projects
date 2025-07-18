import React, { useRef, useState } from "react";
import ChildInput from "./ChildInput";
import Modal from "./Modal";
import ChatBox from "./ChatBox";

const ParentInput = () => {
  const [message, setMessage] = useState(["Hello World", "Hi World"]);
  const inputRef = useRef();
  const modalRef = useRef();
  const chatRef = useRef();

  const sendMessage = () => {
    setMessage((prev) => [...prev, "NEW Message"]);
    setTimeout(() => {
      chatRef.current.scrollToBottom();
    }, 0);
  };
  return (
    <div>
      <ChildInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <Modal ref={modalRef} />
      <button onClick={() => modalRef.current.open()}>Open</button>
      <ChatBox ref={chatRef} message={message} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default ParentInput;
