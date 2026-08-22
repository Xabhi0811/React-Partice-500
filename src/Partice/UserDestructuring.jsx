import React from "react";

const User = ({ name, age, city }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>
    </div>
  );
};

const UserDestructuring = () => {
  return (
    <div>
      <User
        name="Abhishek"
        age={18}
        city="Bhopal"
      />
    </div>
  );
};

export default UserDestructuring;