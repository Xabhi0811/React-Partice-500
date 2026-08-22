import React from 'react'

const Rending = () => {
  return (
    <div>
      {isLoggedIn && <h2>Welcome, Abhishek!</h2>}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Message isLoggedIn={true} />
      <Message isLoggedIn={false} />
    </div>
  );
}

export default Rending
