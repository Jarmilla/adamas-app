import React from "react";

function CollectionOfData({ data, setChoosedDate, setIsPieceOfDataShown, setIsCollectionOfDataShown }) {
  return (
    <div className="collection-of-data">
      <h1>Összegyűjtött Adatok</h1>
      {data &&
        Object.keys(data.items).map((key) => {
          let value = data.items[key];
          return (
            <h2
              onClick={() => {
                setChoosedDate(value);
                setIsPieceOfDataShown(true);
                setIsCollectionOfDataShown(false);
                console.log(value);
              }}
              key={key}
            >
              {value.name}
            </h2>
          );
        })}
    </div>
  );
}
export default CollectionOfData;
