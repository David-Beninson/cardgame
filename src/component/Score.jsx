import React from "react";
import "./style.css";

export default function Score(props) {

  const tryAgian = ()=>{
    props.setPages(1)
  }
  const goToHome = ()=>{
    props.setPages(0)
  }
  return (
    <div id="contanerEnd">
      <br />
      <h2> {props.player.fullName} </h2>
      <h4>
        Win: {props.player.win}
        <span style={{ margin: "5px" }}></span> /{" "}
        <span style={{ margin: "5px" }}></span> Lose: {props.player.lose}
      </h4>
      <br />
      <br />
      <button id="end" onClick={tryAgian}>Try again?</button>
      <button id="end" onClick={goToHome} >Go back</button>
    </div>
  );
}
