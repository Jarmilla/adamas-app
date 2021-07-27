import React from "react";

function CollectionOfData({ data }) {
  return (
    <div className="collection-of-data">
      <h1>CollectionOfData</h1>
      {data &&
        Object.keys(data.items).map((key) => {
          let value = data.items[key];
          console.log(key, value);
          return <h2 key={key}>{value.name}</h2>;
        })}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
export default CollectionOfData;
