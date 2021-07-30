import React, { useState } from "react";
import QrReader from "react-qr-reader";

function Scanner() {
  const [newQrData, setNewQrData] = useState("");

  const handleScan = (data) => {
    if (data !== null) {
      setNewQrData(data);
      let storedData = JSON.parse(localStorage.getItem("scanned")) || [];
      if (!storedData.includes(data)) {
        storedData.push(data);
        localStorage.setItem("scanned", JSON.stringify(storedData));
      }
    }
  };

  const handleError = (err) => console.error(err);

  return (
    <div>
      {newQrData === "" ? (
        <h3>Scanning...</h3>
      ) : (
        <div>
          <h3>Scanned:</h3>
          <p>{newQrData}</p>
        </div>
      )}

      <QrReader delay={300} onError={handleError} onScan={handleScan} facingMode="environment" />
    </div>
  );
}

export default Scanner;
