import "./App.scss";
import React, { useState } from "react";
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import Speciments from "./components/Speciments";

function App() {
  const [isHomeShown, setIsHomeShown] = useState(true);
  const [isScannerShown, setSnanerShown] = useState(false);
  const [isSpecimentsShown, setIsSpecimentsShown] = useState(false);

  const toHome = () => {
    setIsSpecimentsShown(false);
    setSnanerShown(false);
    setIsHomeShown(true);
  };

  const toScanner = () => {
    setIsHomeShown(false);
    setIsSpecimentsShown(false);
    setSnanerShown(true);
  };

  const toSpeciments = () => {
    setIsHomeShown(false);
    setSnanerShown(false);
    setIsSpecimentsShown(true);
  };

  return (
    <div className="App">
      <h1 onClick={toHome}>ASDF Adamas</h1>

      <main>
        <div className="decor-box"></div>
        <article>
          {isHomeShown && <Home />}
          {isScannerShown && <Scanner />}
          {isSpecimentsShown && <Speciments />}
        </article>
      </main>

      <nav>
        <h2 className="nav-button" onClick={toScanner}>
          Scanner
        </h2>
        <h2 className="nav-button" onClick={toSpeciments}>
          Példányok
        </h2>
      </nav>
    </div>
  );
}

export default App;
