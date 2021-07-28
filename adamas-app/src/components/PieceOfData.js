import React from "react";

function PieceOfData({ pieceOfData }) {
  return (
    <div className="piece-of-data">
      <h2> {pieceOfData.name}</h2>
      <p>{pieceOfData.type}</p>
      <ul>
        {pieceOfData.description.map((trait) => (
          <li>{trait}</li>
        ))}
      </ul>
      {Object.keys(pieceOfData.coordinates).map((value) => (
        <p>
          {value} : {pieceOfData.coordinates[value]}
        </p>
      ))}
    </div>
  );
}
export default PieceOfData;
