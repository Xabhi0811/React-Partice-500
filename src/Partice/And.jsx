const Status = ({ isLoggedIn }) => {
  return <div>{isLoggedIn && <h2>Welcome!</h2>}</div>;
};

const And = () => {
  return (
    <div>
      <Status isLoggedIn={true} />
      <Status isLoggedIn={false} />
    </div>
  );
};

export default And;
