// Child component
const Child = (props) => {
  return (
    <div>
      <h2>Login Status: {props.isLoggedIn ? "Logged In" : "Logged Out"}</h2>

      <h2>Fruits:</h2>

      <ul>
        {props.fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// Parent component
const App = () => {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <Child isLoggedIn={true} fruits={fruits} />
    </div>
  );
};

export default App;
