import React from "react";

import "./style.css";
import UseLocalStorage from "../localStorage/UseLocalStorage";

export default function Home(props) {
  const [name, setName] = UseLocalStorage('player' ,"");

  return (
    <div id="contaner">
      <h1> Ready for war</h1>
      <hr />
      <div id="satrtGame">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter your name"
        />
        <br />
        <button
          onClick={() => {
            props.players(name);
          }}
        >
          START
        </button>
      </div>
    </div>
  );
}
