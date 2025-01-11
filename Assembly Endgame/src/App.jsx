import { useState } from "react";
import { languages } from "./data/languages";

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");

  const [guessedLetters, setGuessedLetters] = useState([]);

  console.log(guessedLetters);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const languageElements = languages.map((language) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <span key={language.name} style={styles} className="chip">
        {language.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => {
    return <span key={index}>{letter.toUpperCase()}</span>;
  });

  const keyboardElements = alphabet.split("").map((letter, index) => {
    return (
      <button key={index} onClick={() => addGuessedLetter(letter)}>
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
