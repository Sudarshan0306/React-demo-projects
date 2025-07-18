import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Child = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default Child;
