import "./App.css";
import React, { useState } from "react";
import QrReader from "react-qr-scanner";

function App() {
  const [test, setTest] = useState("");

  const handleScan = (result) => {
    if (result) {
      setTest(result);
      console.log(result);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="App">
      <h1>Hello Adamas</h1>
      <h2>Scanned: {test.text}</h2>
      <QrReader delay={500} onError={handleError} onScan={handleScan} />
    </div>
  );
}

export default App;
