const Sum = ({ num1, num2 }) => {
  const result = num1 + num2;
  return (
    <div>
      <h2>Sum: {result}</h2>
    </div>
  );
};

const Multiply = ({ num1, num2 }) => {
  const result = num1 * num2;
  return (
    <div>
      <h2>Multiplication: {result}</h2>
    </div>
  );
};

const Mult = () => {
  return (
    <div>
      <Sum num1={10} num2={20} />
      <Multiply num1={10} num2={20} />
    </div>
  );
};

export default Mult;
