const Child = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  );
};

const StringProps = () => {
  return (
    <div>
      <Child name="Abhishek" age={18} />
    </div>
  );
};

export default StringProps;
