const UserStatus = ({ isLoggedIn, isAdmin }) => {
  return (
    <div>
      {isLoggedIn ? (
        isAdmin ? (
          <h2>Welcome Admin!</h2>
        ) : (
          <h2>Welcome User!</h2>
        )
      ) : (
        <h2>Please Log In</h2>
      )}
    </div>
  );
};

const NestedCondition = () => {
  return (
    <div>
      <UserStatus isLoggedIn={true} isAdmin={true} />
      <UserStatus isLoggedIn={true} isAdmin={false} />
      <UserStatus isLoggedIn={false} isAdmin={false} />
    </div>
  );
};

export default NestedCondition;
