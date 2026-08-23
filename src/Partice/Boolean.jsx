const Status = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <h2>Please Log in.</h2>
      )}
    </div>
  );
};
const Boolean = () => {
  return (
    <div>
      <Status isLoggedIn={true} />
      <Status isLoggedIn={false} />
    </div>
  );
};

export default Boolean;
