import React from "react";
import PieceOfData from "./PieceOfData";

function CollectionOfData({ data }) {
  return (
    <div className="collection-of-data">
      <h1>CollectionOfData</h1>
      {data &&
        Object.keys(data.items).map((key) => {
          let value = data.items[key];
          return <PieceOfData key={value.name} pieceOfData={value} />;
        })}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
export default CollectionOfData;
