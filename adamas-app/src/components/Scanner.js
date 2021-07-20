import React, { useState } from "react";
import QrReader from "react-qr-scanner";

function Scanner() {
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
    <div>
      <h2>Scanned: {test.text}</h2>
      <QrReader delay={500} onError={handleError} onScan={handleScan} />
    </div>
  );
}

export default Scanner;
