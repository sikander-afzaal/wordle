import React, { useState, useEffect } from "react";
import "./App.css";
import Line from "./Line";
import words from "./words";

function App() {
  //find index returns the first match according to condition
  const [solution, setSolution] = useState(
    words[Math.floor(Math.random() * words.length)].toLowerCase()
  );
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    console.log(solution);
    const typeLetter = (e) => {
      if (gameOver) {
        return;
      }
      if (e.key === "Enter") {
        const newGuesses = [...guesses];
        const currentIndex = guesses.findIndex((word) => word === null); // to get current index so we can only update it
        newGuesses[currentIndex] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");
        setGameOver(currentGuess === solution);
        return;
      }
      if (e.key === "Backspace") {
        setCurrentGuess((prev) => {
          return prev.slice(0, -1);
        });
        return;
      }
      const checkLetter = e.key.match(/[a-z]/g); // checking if the letter is not a number
      if (currentGuess.length < 5 && checkLetter) {
        setCurrentGuess((prev) => (prev += e.key));
      }
    };
    window.addEventListener("keydown", typeLetter);
    return () => {
      window.removeEventListener("keydown", typeLetter);
    };
  }, [currentGuess, guesses]);

  return (
    <div className="App">
      {guesses.map((elem, idx) => {
        const isCurrentGuess =
          idx === guesses.findIndex((word) => word === null); // to check if we are currently guessing or is it an old guess
        return (
          <Line
            key={Math.random()}
            guess={isCurrentGuess ? currentGuess : elem ?? ""}
            solution={solution}
            checkWord={!isCurrentGuess && elem !== null}
          />
        );
      })}
    </div>
  );
}

export default App;
