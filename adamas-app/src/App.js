import "./App.scss";
import React, { useState } from "react";
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import CollectionOfData from "./components/CollectionOfData";

function App() {
  const [isHomeShown, setIsHomeShown] = useState(true);
  const [isScannerShown, setSnanerShown] = useState(false);
  const [isCollectionOfDataShown, setIsCollectionOfDataShown] = useState(false);

  const toHome = () => {
    setIsCollectionOfDataShown(false);
    setSnanerShown(false);
    setIsHomeShown(true);
  };

  const toScanner = () => {
    setIsHomeShown(false);
    setIsCollectionOfDataShown(false);
    setSnanerShown(true);
  };

  const toCollectionOfData = () => {
    setIsHomeShown(false);
    setSnanerShown(false);
    setIsCollectionOfDataShown(true);
  };

  return (
    <div className="App">
      <button className="home-button button-effect" onClick={toHome}>
        ASDF Adamas
      </button>

      <main>
        <div className="decor-box"></div>
        <article>
          {isHomeShown && <Home />}
          {isScannerShown && <Scanner />}
          {isCollectionOfDataShown && <CollectionOfData />}
        </article>
      </main>

      <nav>
        <button className="button-effect" onClick={toCollectionOfData}>
          Adatok
        </button>
        <button className="button-effect" onClick={toScanner}>
          Scanner
        </button>
      </nav>
    </div>
  );
}

export default App;
