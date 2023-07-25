import * as React from "react";
import "./Dice.css";
import { useState } from "react";
import One from "./images/One.svg";
import Two from "./images/Two.svg";
import Three from "./images/Three.svg";
import Four from "./images/Four.svg";
import Five from "./images/Five.svg";
import Six from "./images/Six.svg";

export default function App(): JSX.Element {
  const diceImages = [One, Two, Three, Four, Five, Six];

  const [image, setImage] = useState(diceImages[0]);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6);
    console.log(randomNum + 1);

    setImage(diceImages[randomNum]);
  };
  return (
    <div>
      <center>
        <h1>Welcome to this Dice APP!</h1>
        <div className="container">
          <img className="square" src={image} alt="dice"></img>
          <button onClick={rollDice}>ROLL</button>
        </div>
      </center>
    </div>
  );
}
