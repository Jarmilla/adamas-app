import React, { useState, useEffect } from "react";
import { geoDistance, formatCoords } from "./utils/geoDistance";

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

      <ul>
        <li>Típus: {pieceOfData.type}</li>
        {pieceOfData.coordinates ? <li>Bemérve: {formatCoords(pieceOfData.coordinates)}</li> : ""}
        {pieceOfData.coordinates && userCoords ? (
          <li>
            Távolság: {geoDistance(pieceOfData.coordinates, userCoords).toFixed(0)} m (±{userCoords.accuracy.toFixed(0)} m){" "}
          </li>
        ) : (
          ""
        )}
      </ul>
      <ul>
        {pieceOfData.description.map((trait, key) => (
          <li key={key}>{trait}</li>
        ))}
      </ul>
    </div>
  );
}
export default PieceOfData;
