import Increment from "./Increment";
import "./App.css";
import { useState } from "react";
import { DEFAULT_NAME } from "../constants/constants";

function App() {
  // allows user to set their name for the entire application
  const [name, setName] = useState(DEFAULT_NAME);

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="nameInput" id="nameInputLabel">
          Enter Your Name:
          <input
            type="text"
            id="nameInput"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <h5>Hello, {name}</h5>
        <Increment />
      </header>
    </div>
  );
}

export default App;
