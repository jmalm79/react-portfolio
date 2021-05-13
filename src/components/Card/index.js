import React from "react";
import "./style.css";

function Card(props) {
  return (
      
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            <strong> 
            <a class="link" href={props.url} target = "_blank" rel="noopener noreferrer">Visit Live Site</a>
            </strong>          
          </li>
          <li>
            <strong> 
            <a class="link" href={props.github} target = "_blank" rel="noopener noreferrer">GitHub Repo:</a>
            </strong>          
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
