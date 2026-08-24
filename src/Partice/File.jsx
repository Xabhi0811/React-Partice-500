const MultipleRoot = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
};

const InvalidAttribute = () => {
  return <div className="container">Hello</div>;
};

const IncorrectTags = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
};

const JavaScriptOutside = () => {
  const name = "User";

  return <h1>Hello, {name}</h1>;
};

const NoReturn = () => {
  return <h1>Hello</h1>;
};

const Greeting = () => {
  return <h1>Hello</h1>;
};

const Welcome = () => {
  return <h1>Welcome!</h1>;
};

const File = () => {
  return (
    <div>
      <MultipleRoot />
      <InvalidAttribute />
      <IncorrectTags />
      <JavaScriptOutside />
      <NoReturn />
      <Greeting />
      <Welcome />
    </div>
  );
};

export default File;
