import React, { use, useEffect, useState } from "react";

const fetchUser = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  );

const DemoUse = () => {
    // const user = use(fetchUser());

  return (
    <div>
      {/* <h2>{user.name}</h2>
      <p>{user.email}</p> */}
    </div>
  );
};

export default DemoUse;
