import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://${window.location.host}/api/greeting`)
      .then((r) => r.text())
      .then((d) => setMessage(d));
  }, []);

  const onLogoutClick = () =>
    // eslint-disable-next-line no-restricted-globals
    (location.href = "/app/logout");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <button onClick={() => onLogoutClick()}>Logout</button>
      </header>
    </div>
  );
}

export default App;
