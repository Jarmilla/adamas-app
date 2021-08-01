import React, { useState, useEffect } from "react";

function toRadian(degrees) {
  return (degrees * 2 * Math.PI) / 360;
}

function geoDistance(coordinates1, coordinates2) {
  // Haversine formula: https://en.wikipedia.org/wiki/Haversine_formula
  // Stable formula for short distances
  // Earth is an ellipsoid, so different latitudes have different radiuses
  // Earth radius changes from 6357 km ... 6378 km
  const earthRadiusAtPipishegy = 6366.442 * 1000;
  const lat1 = toRadian(coordinates1.latitude);
  const lon1 = toRadian(coordinates1.longitude);
  const lat2 = toRadian(coordinates2.latitude);
  const lon2 = toRadian(coordinates2.longitude);
  return (
    2 *
    earthRadiusAtPipishegy *
    Math.asin(Math.sqrt(Math.pow(Math.sin((lat2 - lat1) / 2), 2) + Math.cos(lat2) * Math.cos(lat1) * Math.pow(Math.sin((lon2 - lon1) / 2), 2)))
  );
}

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
      {userCoords ? <p>Távolság: {geoDistance(pieceOfData.coordinates, userCoords).toFixed(0)} m</p> : ""}
      <h3>Jelenlegi tartozkódási hely:</h3>
      {userCoords ? (
        <div>
          <p>
            <span>{userCoords?.latitude.toFixed(6)}</span>
            <span>, </span>
            <span>{userCoords?.longitude.toFixed(6)}</span>
          </p>
          <p>Pontosság : {userCoords?.accuracy.toFixed(0)} m</p>
        </div>
      ) : (
        <p>Ismeretlen</p>
      )}
    </div>
  );
}
export default PieceOfData;
