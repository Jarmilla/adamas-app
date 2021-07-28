import React, { useState } from "react";

function PieceOfData({ pieceOfData }) {
  const [isClicked, setIsCliked] = useState(false);
  const [isDataShown, setDataShown] = useState(false);

  return (
    <div className="piece-of-data">
      <h2
        className={` button-effect ${isClicked ? "selected" : null}`}
        onClick={() => {
          setDataShown(!isDataShown);
          setIsCliked(!isClicked);
        }}
      >
        {pieceOfData.name}
      </h2>

      {isDataShown && (
        <div>
          <h3>Olvasás részletes adatai:</h3>
          <p>Típus: {pieceOfData.type}</p>
          <ul>
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
      )}
    </div>
  );
}
export default PieceOfData;
