const Child = ({ label }) => {
  return <p>{label}</p>;
};

const Question2 = () => {
  return (
    <section>
      <h2>2. Parent With Children</h2>
      <Child label="First child" />
      <Child label="Second child" />
    </section>
  );
};

export default Question2;
