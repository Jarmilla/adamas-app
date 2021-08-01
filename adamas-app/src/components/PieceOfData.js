import React, { useState, useEffect } from "react";

function PieceOfData({ pieceOfData }) {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(
      (position) => setUserCoords(position.coords),
      (error) => console.log("Error:", error),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchID);
  }, []);

  return (
    <div className="piece-of-data">
      <h2 className="button-effect selected">{pieceOfData.name}</h2>

      <h3>Letapogatás eredménye:</h3>
      <ul>
        <li>Típus: {pieceOfData.type}</li>
        {pieceOfData.description.map((trait, key) => (
          <li key={key}>{trait}</li>
        ))}
      </ul>

      <h3>Bemérve itt: </h3>
      <p>
        <span>{pieceOfData.coordinates.latitude}</span>
        <span>, </span>
        <span>{pieceOfData.coordinates.longitude}</span>
      </p>

      <h3>Jelenlegi tartozkódási hely:</h3>
      {userCoords ? (
        <div>
          <p>
            <span>{userCoords?.latitude.toFixed(6)}</span>
            <span>, </span>
            <span>{userCoords?.longitude.toFixed(6)}</span>
          </p>
          <p>Pontosság : {userCoords?.accuracy} m</p>
        </div>
      ) : (
        <p>Ismeretlen</p>
      )}
    </div>
  );
}
export default PieceOfData;
