import "./App.scss";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import CollectionOfData from "./components/CollectionOfData";
import PieceOfData from "./components/PieceOfData";

function App() {
  const [isHomeShown, setIsHomeShown] = useState(true);
  const [isScannerShown, setScannerShown] = useState(false);
  const [isCollectionOfDataShown, setIsCollectionOfDataShown] = useState(false);
  const [isPieceOfDataShown, setIsPieceOfDataShown] = useState(false);
  const [choosedData, setChoosedData] = useState(null);

  const toHome = () => {
    setIsHomeShown(true);
    setIsCollectionOfDataShown(false);
    setIsPieceOfDataShown(false);
    setScannerShown(false);
  };

  const toCollectionOfData = () => {
    setIsHomeShown(false);
    setIsCollectionOfDataShown(true);
    setIsPieceOfDataShown(false);
    setScannerShown(false);
    setChoosedData(null);
  };

  const toPieceOfData = () => {
    setIsHomeShown(false);
    setIsCollectionOfDataShown(false);
    setIsPieceOfDataShown(true);
    setScannerShown(false);
  };

  const toScanner = () => {
    setIsHomeShown(false);
    setIsCollectionOfDataShown(false);
    setIsPieceOfDataShown(false);
    setScannerShown(true);
  };

  const [data, setData] = useState({ items: {} });

  const fetchData = () => {
    fetch(process.env.PUBLIC_URL + "/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(setData);
  };

  useEffect(fetchData, [setData]);

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
          {isScannerShown && <Scanner data={data} />}
          {isCollectionOfDataShown && <CollectionOfData data={data} setChoosedData={setChoosedData} toPieceOfData={toPieceOfData} />}
          {isPieceOfDataShown && <PieceOfData pieceOfData={choosedData} />}
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
