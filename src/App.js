import React, { useState } from "react";
import Home from "./component/Home";
import Game from "./component/Game";
import Score from "./component/Score";

import "./App.css";

function App() {
  const [player, setPlayer] = useState("player", {});

  //העברה בין כל קומפוננטה
  const [pages, setPages] = useState(0);
  //סטייט למערך של השחקנים
  const [computerDeck, setcomputerDeck] = useState([]); //מערך קלםי המחשב
  //כדי לשלוח את המערך בפונקציה חייב להגדיר סטייט
  const [playerDeck, setPlayerDeck] = useState([]); //מערך קלפי השחקן

  const players = (name) => {
    if (name.length === 0) {
      alert("your name is invalid");
    } else {
      setPages(1);
      creatDeck();
      setPlayer({ fullName: name, win: 0, lose: 0 });
    }
  };

  //פונקצית משחק
  const creatDeck = () => {
    let temp = []; //מערך המחזיקה את מערך כלל הקלפים
    for (let i = 1, caravalue = 1; i <= 52; i++) {
      temp.push(caravalue);
      if (i % 4 === 0) {
        caravalue++;
      }
    }

    let rnd; //ייצור מיקומים לקלפים במערך
    let playDeck = []; // מקבלת קלפים מהמיקום של המערך לשחקן
    let compDeck = []; //מקבל מערך של קלפים מהמיקום של המערך למחשב

    for (let i = 0; i < 26; i++) {
      rnd = Math.floor(Math.random() * temp.length);
      compDeck.push(temp[rnd]); //הגרלת הקלף במקום ה rnd
      temp.splice(rnd, 1); //לחתוך ולהזריק מיקום + כמות

      rnd = Math.floor(Math.random() * temp.length);
      playDeck.push(temp[rnd]); //הגרלת הקלף במקום ה rnd
      temp.splice(rnd, 1); //לחתוך ולהזריק מיקום + כמות

      setcomputerDeck([...compDeck]); //מייצר את מערך הקלפים של המחשב
      setPlayerDeck([...playDeck]); //מייצר את מערך הקלפים של השחקן
    }
  };

  // const fromStorage = () => {
  //   let temp = [];
  //   let storage = localStorage.getItem(player)
  //   temp = [...storage];
  //   if (temp === [""]) {
  //     return null;
  //   } else {
  //     console.log(temp);
  //   }
  // };
  // fromStorage()
  //פונקציה הגדרת דפים
  const swichPages = () => {
    if (pages === 0) {
      return <Home player={player} players={players} />;
    } else if (pages === 1) {
      return (
        <Game
          setPages={setPages}
          player={player}
          playerDeck={playerDeck}
          computerDeck={computerDeck}
        />
      );
    } else if (pages === 2) {
      return <Score setPages={setPages} player={player} />;
    }
  };
  return <div className="App">{swichPages()}</div>;
}

export default App;
