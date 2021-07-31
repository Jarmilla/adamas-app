import React from "react";

function CollectionOfData({ data, setChosenData, toPieceOfData }) {
  return (
    <div className="collection-of-data">
      <h1>Összegyűjtött Adatok</h1>
      {data &&
        Object.keys(data.items)
          .filter((key) => JSON.parse(localStorage.getItem("scanned"))?.includes(key))
          .map((key) => {
            let value = data.items[key];
            return (
              <h2
                onClick={() => {
                  setChosenData(value);
                  toPieceOfData();
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
