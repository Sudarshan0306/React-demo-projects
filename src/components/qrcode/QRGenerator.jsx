import React from "react";
import { useState } from "react";
import axios from "axios";

const QRGenerator = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await axios.post("http://localhost:3000/generate", {
        name,
        email,
      });
      setQrCode(res.data.qrCode);
    } catch (error) {
      alert("Failed to generate QR Code");
    }
  };

  return (
    <>
      <h1>QR Code Generator</h1>
      <div className="">
        <label htmlFor=""></label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor=""></label>
        <input
          type="text"
          id="email"
          email="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
        {qrCode && (
          <div style={{ marginTop: "20px" }}>
            <img src={qrCode} alt="QR Code" />
          </div>
        )}
      </div>
    </>
  );
};

export default QRGenerator;
