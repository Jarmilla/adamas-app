import React from "react";

function PieceOfData({ pieceOfData }) {
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
    </div>
  );
}
export default PieceOfData;
