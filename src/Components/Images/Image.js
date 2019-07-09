import React from "react";
import "./style.css";


const Images = props => {
  return (
    <div className="card" onClick={() => props.beenClicked(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Images;
