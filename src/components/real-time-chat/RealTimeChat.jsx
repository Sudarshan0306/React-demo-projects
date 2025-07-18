import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const RealTimeChat = () => {
  const [ws, setWs] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  // Connect to WebSocket on mount
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    setWs(socket);

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    return () => socket.close();
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (ws && input.trim()) {
      ws.send(input);
      setInput("");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", padding: 20 }}>
      <h2>🗨️ Real-Time Chat</h2>
      <div
        style={{
          border: "1px solid #ccc",
          height: 300,
          overflowY: "scroll",
          marginBottom: 10,
          padding: 10,
          borderRadius: 4,
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ padding: 4 }}>
            {msg}
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        style={{ width: "80%", padding: 8 }}
      />
      <button onClick={sendMessage} style={{ padding: 8, marginLeft: 10 }}>
        Send
      </button>
    </div>
  );
};

export default RealTimeChat;
