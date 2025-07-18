import React from "react";
import Child from "./Child";
import { Link } from "react-router-dom";

const Parent = () => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
      </ul>
    </div>
  );
};

export default Parent;
