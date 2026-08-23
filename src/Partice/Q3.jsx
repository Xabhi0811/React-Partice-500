const Greeting = () => {
  return <h3>Hello from the child component.</h3>;
};

const Question1 = () => {
  return (
    <section>
      <h2>1. Component Rendering</h2>
      <Greeting />
    </section>
  );
};

export default Question1;
