import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const data = response.data;
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (name.trim() === "") {
      setFilteredData(data);
    } else {
      const newData = data.filter((user) =>
        user.name.toLowerCase().startsWith(name.toLowerCase())
      );
      setFilteredData(newData);
    }
  }, [name, data]);

  return (
    <>
      <div className="container mt-4">
        <h1>Table with sorting and filtering</h1>
        <div className="form-group">
          <label htmlFor="">Filter by name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search by name"
          />
        </div>
        <table className="table table-dark mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
