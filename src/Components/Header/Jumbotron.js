import React from "react";
import "./style.css";

const Header= () => {
  return (
    <nav className="jumbotron jumbotron-fluid">
      <div className="container headerText">
        <h1 className="display-4">Clicky Memory Game</h1>
        <p className="lead">Click on the images below to earn points. If you click on the same image twice the game will end.</p>
      </div>
    </nav>
  );
}

export default Header;
