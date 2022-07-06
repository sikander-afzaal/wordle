import React from "react";
import Tile from "./Tile";

function Line({ guess, solution, checkWord }) {
  const WORD_LENGTH = 5;
  const tiles = [];
  for (let index = 0; index < WORD_LENGTH; index++) {
    let classTile = "tile";
    const char = guess[index];
    if (checkWord) {
      if (char === solution[index]) {
        classTile += " correct";
      } else if (solution.includes(char)) {
        classTile += " available";
      } else {
        classTile += " incorrect";
      }
    }
    tiles.push({
      char,
      classTile,
    });
  }
  return (
    <div className="line">
      {tiles.map((elem, idx) => {
        return (
          <Tile
            key={Math.random()}
            letter={elem.char}
            classTile={elem.classTile}
          />
        );
      })}
    </div>
  );
}

export default Line;
