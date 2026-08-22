import React from "react";

const Users = () => {
  const users = [
    { id: 1, name: "Abhishek" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" },
    { id: 4, name: "Rohit" },
  ];

  return (
    <div>
      <h1>User List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;