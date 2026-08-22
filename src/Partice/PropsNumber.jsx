const Num = (props) => {
  return <h2>Age is {props.age}</h2>;
};

const PropsNumber = () => {
  return (
    <div>
      <Num age={18} />
      <Num age={17} />
    </div>
  );
};

export default PropsNumber;