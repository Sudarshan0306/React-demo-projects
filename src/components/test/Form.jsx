import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && email.trim() !== "") {
      alert(`${name}, ${email}`);
      console.log(name, email);
    }
    setName("");
    setEmail("");
  };
  return (
    <div className="container">
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
