import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>URL:</strong> {props.url}
          </li>
          <li>
            <strong>GitHub:</strong> {props.github}
          </li>
        </ul>
      </div>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
