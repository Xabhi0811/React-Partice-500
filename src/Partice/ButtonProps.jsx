const Data = ({ text }) => {
  return <button>{text}</button>;
};

const ButtonProps = () => {
  return (
    <div>
      <Data text="Login" />
      <Data text="Sign Up" />
      <Data text="Logout" />
    </div>
  );
};

export default ButtonProps;
