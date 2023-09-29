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
  const [heldScoreP1, setHeldScoreP1] = useState<number>(0);
  const [heldScoreP2, setHeldScoreP2] = useState<number>(0);

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
    //console.log({ turnTotal, heldScore, avocado: roll });
    if (roll === 1) {
      setTurnTotal(0);
    }
    console.log("Increasing by", roll);
    //console.log('sum equals', turnTotal + roll)
  };

  const handleStartAgain = () => {
    setTurnTotal(0);
    setHeldScoreP1(0);
    setHeldScoreP2(0);
    setDieNum(0);
  };

  const handleHoldNumP1 = () => {
    const score = heldScoreP1 + turnTotal;
    setHeldScoreP1(score);
    setTurnTotal(0);
  };

  const handleHoldNumP2 = () => {
    const score = heldScoreP2 + turnTotal;
    setHeldScoreP2(score);
    setTurnTotal(0);
  };
  return (
    <div>
      <center>
        <h1>Welcome to the pig APP!</h1>
        <div className="container">
          {heldScoreP1 >= 100 && (
            <>
              <p> PLAYER 1 WINS! </p>
              <button onClick={handleStartAgain}>PLAY AGAIN</button>
            </>
          )}
          {heldScoreP2 >= 100 && (
            <>
              <p> PLAYER 2 WINS! </p>
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
        <button onClick={handleHoldNumP1}>HOLD</button>
        <p> PLAYER 1 SCORE: {heldScoreP1} </p>
        <button onClick={handleHoldNumP2}>HOLD</button>
        <p> PLAYER 2 SCORE: {heldScoreP2} </p>
        <p> TURN TOTAL: {turnTotal}</p>
      </center>
    </div>
  );
}
