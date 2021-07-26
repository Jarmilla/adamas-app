import "./App.scss";
import React, { useState, useEffect } from "react";
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

  const [data, setData] = useState({"items":{}});

  const fetchData = () => {
    fetch('data.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(setData)
  }

  useEffect(fetchData, [setData])

  return (
    <div className="App">
      <button className={`home-button button-effect ${isHomeShown ? "selected" : null}`} onClick={toHome}>
        ASDF Adamas
      </button>

      <main>
        <div className="decor-box">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <article>
          {isHomeShown && <Home />}
          {isScannerShown && <Scanner />}
          {isCollectionOfDataShown && <CollectionOfData />}
          <p>{ JSON.stringify(data) }</p>
        </article>
      </main>

      <nav>
        <button className={`button-effect ${isCollectionOfDataShown ? "selected" : null}`} onClick={toCollectionOfData}>
          Adatok
        </button>
        <button className={`button-effect ${isScannerShown ? "selected" : null}`} onClick={toScanner}>
          Scanner
        </button>
      </nav>
    </div>
  );
}

export default App;