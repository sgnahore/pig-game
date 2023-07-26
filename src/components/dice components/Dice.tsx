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
  const [image, setImage] = useState(diceImages[-1]);
  const [renderedRanNum, setRenderedRanNum] = useState<number>(0);
  const [heldNum, setHeldNum] = useState<number>(0);

  const handleRollDice = () => {
    const randomNum = Math.floor(Math.random() * 6);
    const dieNum = randomNum + 1;
    setImage(diceImages[randomNum]);

    const rollSum = () => {
      const sum = renderedRanNum + dieNum;
      setRenderedRanNum(sum);

      if (dieNum === 1) {
        setRenderedRanNum(0);
      }
    };
    console.log('Increasing by', dieNum);
    //console.log('sum equals', renderedRanNum + dieNum)
    rollSum();
  };

  const handleStartAgain = () => {
    setRenderedRanNum(0);
    setHeldNum(0);
  };

  const handleHoldNum = () => {
    const score = heldNum + renderedRanNum;
    setHeldNum(score);
    setRenderedRanNum(0);
  }
  return (
    <div>
      <center>
        <h1>Welcome to the pig APP!</h1>
        <div className="container">
          {heldNum >= 100 && (
            <>
              <p> winner! </p>
              <button onClick={handleStartAgain}>PLAY AGAIN</button>
            </>
          )}
          <img className="square" src={image} alt="dice"></img>
        </div>
        <button onClick={handleRollDice}>ROLL</button>
        <button onClick={handleHoldNum}>HOLD</button>
        <p> YOUR SCORE: {heldNum} </p>
        {renderedRanNum}

      </center>
    </div>
  );
}