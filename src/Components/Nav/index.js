import React from "react";
import "./style.css";

const Nav = props => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Memory Game</a>
      <div className="score">
        Score: {props.score} Highscore: {props.highScore}
      </div>
    </div>
  );
}

export default Nav;