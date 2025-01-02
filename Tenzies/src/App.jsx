import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  const diceElements = dice.map((dieObj) => {
    return <Die key={dieObj.id} value={dieObj.value} />;
  });

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      newDice.push({ value: randomNumber, isHeld: false, id: nanoid() });
    }
    return newDice;
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
