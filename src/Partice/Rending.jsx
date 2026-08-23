const Message = ({ isLoggedIn }) => {
  return <div>{isLoggedIn && <h2>Welcome, Abhishek!</h2>}</div>;
};

const Rending = () => {
  return (
    <div>
      <Message isLoggedIn={true} />
      <Message isLoggedIn={false} />
    </div>
  );
};

export default Rending;
