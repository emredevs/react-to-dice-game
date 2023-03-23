import React, { useState } from "react";
import Dice from "./Dice";
import "./RollDice.css";
export default function RollDice() {
  const [dice, setDice] = useState({ dice1: "one", dice2: "two" });
  const numbers = ["one", "two", "three", "four", "five", "six"];
  const numberDice = () => {
    const newDice1 = numbers[Math.floor(Math.random() * numbers.length)];
    const newDice2 = numbers[Math.floor(Math.random() * numbers.length)];
    setDice({ dice1: newDice1, dice2: newDice2 });
  };
  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Dice face1={dice.dice1} />
        <Dice face2={dice.dice2} />
      </div>
      <button className="btn" onClick={numberDice}>
        Bul Karayı Al Parayı
      </button>
    </div>
  );
}
