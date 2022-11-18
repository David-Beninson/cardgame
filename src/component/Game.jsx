import React, { useState } from "react";
import Card from "./Card";
import "./style.css";

export default function Game(props) {
  //מייצר פונקציה שתעביר לקומפוננטה של card
  const [index, setIndex] = useState(0);
  const [pointComputer, setPointComputer] = useState(0);
  const [pointPlayer, setPointPlayer] = useState(0);

  //שליחה למחשב
  const sendCardToComputer = () => {
    return props.computerDeck[index];
  };

  //שליחה לשחקן
  const sendCardToPlayer = () => {
    return props.playerDeck[index];
  };

  const incIndex = () => {
    let c = pointComputer;
    let p = pointPlayer;
    if (props.computerDeck[index] > props.playerDeck[index]) {
      c++;
      setPointComputer(c);
    } else if (props.computerDeck[index] < props.playerDeck[index]) {
      p++;
      setPointPlayer(p);
    }
    let temp = index;
    temp++;
    setIndex(temp);
    if (index === 25) {
      if (pointPlayer > pointComputer) {
        props.player.win++;
      } else {
        props.player.lose++;
      }
      props.setPages(2);
    }
  };

  return (
    <div id="contaner">
      <h1>good luck {props.player.fullName}!!</h1>
      <h4>computer :{pointComputer}</h4>
      <Card cardVal={sendCardToComputer} />
      <br />
      <Card cardVal={sendCardToPlayer} />
      <h4>
        {props.player.fullName} :{pointPlayer}
      </h4>
      <button onClick={incIndex}>NEXT</button>
    </div>
  );
}
