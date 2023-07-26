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
  const [turnTotal, setTurnTotal] = useState<number>(0);
  const [heldScore, setHeldScore] = useState<number>(0);
  const [dieNum, setDieNum] = useState(0);

  // const arr = useState(0);
  // const dieNum = arr[0];
  // const setDieNum = arr[1];

  const image = diceImages[dieNum - 1];

  const handleRollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDieNum(roll);

    const sum = turnTotal + roll;
    setTurnTotal(sum);
    console.log({ turnTotal, heldScore, avocado: roll });
    if (roll === 1) {
      setTurnTotal(0);
    }
    console.log("Increasing by", roll);
    //console.log('sum equals', turnTotal + roll)
  };

  const handleStartAgain = () => {
    setTurnTotal(0);
    setHeldScore(0);
  };

  const handleHoldNum = () => {
    const score = heldScore + turnTotal;
    setHeldScore(score);
    setTurnTotal(0);
  };
  return (
    <div>
      <center>
        <h1>Welcome to the pig APP!</h1>
        <div className="container">
          {heldScore >= 100 && (
            <>
              <p> winner! </p>
              <button onClick={handleStartAgain}>PLAY AGAIN</button>
            </>
          )}
          {image !== undefined ? (
            <img className="square" src={image} alt="dice"></img>
          ) : (
            "Roll the Die!"
          )}
        </div>
        <button onClick={handleRollDice}>ROLL</button>
        <p>current roll: {dieNum}</p>
        <button onClick={handleHoldNum}>HOLD</button>
        <p> YOUR SCORE: {heldScore} </p>
        {turnTotal}
      </center>
    </div>
  );
}
