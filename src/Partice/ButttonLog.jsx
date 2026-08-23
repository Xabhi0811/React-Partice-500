const Child = ({ onMessage }) => {
  return (
    <div>
      <button onClick={onMessage}>Click Child Button</button>
    </div>
  );
};

const ButttonLog = () => {
  const handleMessage = () => {
    alert("hello from parent!");
  };

  return (
    <div>
      <h1> Parent Component</h1>
      <Child onMessage={handleMessage} />
    </div>
  );
};

export default ButttonLog;
