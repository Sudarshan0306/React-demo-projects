import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const ChatBox = forwardRef(({ message }, ref) => {
  const containerRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    },
  }));
  return (
    <div ref={containerRef}>
      {message.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
    </div>
  );
});

export default ChatBox;
