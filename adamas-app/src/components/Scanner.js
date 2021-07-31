import React, { useState } from "react";
import QrReader from "react-qr-reader";

function Scanner({ data, setChosenData, toPieceOfData }) {
  const [qrCodeNotInDatabase, setQrCodeNotInDatabase] = useState("");

  const handleScan = (qrCode) => {
    if (qrCode !== null) {
      let storedData = JSON.parse(localStorage.getItem("scanned")) || [];
      if (!storedData.includes(qrCode)) {
        storedData.push(qrCode);
        localStorage.setItem("scanned", JSON.stringify(storedData));
      }
      if (Object.keys(data.items).includes(qrCode)) {
        setChosenData(data.items[qrCode]);

        toPieceOfData();
      } else {
        setQrCodeNotInDatabase(qrCode);
      }
    }
  };

  const handleError = (err) => console.error(err);

  return (
    <div>
      {qrCodeNotInDatabase === "" ? (
        <h3>Scanning...</h3>
      ) : (
        <div>
          <h3>Scanned:</h3>
          <p>{qrCodeNotInDatabase}</p>
        </div>
      )}

      <QrReader delay={300} onError={handleError} onScan={handleScan} facingMode="environment" />
    </div>
  );
}

export default Scanner;
