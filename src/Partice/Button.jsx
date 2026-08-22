import React from 'react'
const Button = ({ text, color, handleClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

const ButtonProps = () => {
  const handleLogin = () => {
    alert("Login button clicked!");
  };

  const handleSignup = () => {
    alert("Sign Up button clicked!");
  };

  return (
    <div>
      <Button
        text="Login"
        color="green"
        handleClick={handleLogin}
      />

      <Button
        text="Sign Up"
        color="blue"
        handleClick={handleSignup}
      />
    </div>
  );
};

export default Button
