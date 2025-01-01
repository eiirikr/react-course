import { useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  const diceElements = dice.map((num) => {
    return <Die value={num} />;
  });

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      newDice.push(randomNumber);
    }
    return newDice;
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}
