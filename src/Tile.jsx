import React from "react";

function Tile({ letter, classTile }) {
  return (
    <div className={classTile}>
      <p>{letter}</p>
    </div>
  );
}

export default Tile;
