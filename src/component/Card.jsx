import React from "react";

export default function Card(props) {
  return (
    <div id="cardBlock">
      <h1 id="cardVal">{props.cardVal()}</h1>
    </div>
  );
}
