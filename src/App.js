import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import { useState } from "react";
function App() {
  const [on, setOn] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {on && <Clock />}
        <button onClick={() => setOn(!on)}>{`Turn ${
          on ? "off" : "on"
        }`}</button>
      </header>
    </div>
  );
}

export default App;
