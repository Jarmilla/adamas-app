import React from "react";
import PieceOfData from "./PieceOfData";

function CollectionOfData({ data, choosedData, setChoosedDate }) {
  return (
    <div className="collection-of-data">
      {choosedData ? (
        <PieceOfData pieceOfData={choosedData} />
      ) : (
        <div>
          <h1>Összegyűjtött Adatok</h1>
          {data &&
            Object.keys(data.items).map((key) => {
              let value = data.items[key];
              return (
                <h2
                  onClick={() => {
                    setChoosedDate(value);
                    console.log(value);
                  }}
                  key={key}
                >
                  {value.name}
                </h2>
              );
            })}
        </div>
      )}
    </div>
  );
}
export default CollectionOfData;
