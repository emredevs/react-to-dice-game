import React from "react";
import "./Dice.css";
export default function Dice({ face1, face2 }) {
  const cls1 = `fa-solid fa-8x fa-dice-${face1} Dice first-dice`;
  const cls2 = `fa-solid fa-8x fa-dice-${face2} Dice two-dice `;
  return (
    <div>
      <i className={cls1}></i>
      <i className={cls2}></i>
    </div>
  );
}
