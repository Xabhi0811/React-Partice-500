import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" />

      <img src="https://via.placeholder.com/150" alt="Placeholder" />

      <button onClick={() => alert("Button clicked!")}>Click Me</button>

      <>
        <h1>Hello React</h1>
        <p>This is a paragraph.</p>
      </>

      {isLoggedIn && <h2>Logged In</h2>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </>
  );
}

export default App;
