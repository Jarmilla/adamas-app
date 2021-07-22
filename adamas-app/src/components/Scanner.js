import React, { useState } from "react";
import QrReader from "react-qr-reader";

function Scanner() {
  const [qrData, setQrData] = useState("");

  const handleScan = (data) => {
    if (data) setQrData(data);
  };

  const handleError = (err) => console.error(err);

  return (
    <div>
      {qrData === "" ? (
        <h3>Scanning...</h3>
      ) : (
        <div>
          <h3>Scanned:</h3>
          <p>{qrData}</p>
        </div>
      )}

      <QrReader delay={300} onError={handleError} onScan={handleScan} facingMode="environment" />
    </div>
  );
}

export default Scanner;
