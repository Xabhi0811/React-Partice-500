const Greeting = (props) => {
  return <h1>Name is, {props.name}!</h1>;
};

const Props = () => {
  return (
    <div>
      <Greeting name="Abhishek" />
      <Greeting name="Bittu" />
    </div>
  );
};

export default Props;