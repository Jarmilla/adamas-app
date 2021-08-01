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
      {Object.keys(pieceOfData.coordinates).map((value) => (
        <p key={value}>
          {value} : {pieceOfData.coordinates[value]}
        </p>
      ))}

      <h3>Jelenlegi tartozkódási adat:</h3>
      <p>{userCoords?.latitude}</p>
      <p>{userCoords?.longitude}</p>
      <p>{userCoords?.accuracy} </p>
    </div>
  );
}
export default PieceOfData;
