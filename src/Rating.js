import React from "react";
import "./App.css";

function Rating(props) {
  var x = props.valeur;
  var start = [];

  for (let j = 0; j < 5; j++) {
    if (j < x) {
      start.push(<i class="fas fa-star" style={{ color: "red" }} />);
    } else {
      start.push(<i class="fas fa-star" style={{ color: "black" }} />);
    }
  }
  return <div>{start}</div>;
}

export default Rating;
