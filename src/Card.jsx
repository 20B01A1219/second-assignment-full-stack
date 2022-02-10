import React from "react";
import faker from "faker";
import "./styles.css";

function Card(props) {
  return (
    <div className="ui cards" id="first">
      <div className="card">
        <div className="content">
          <img
            className="right floated mini ui image"
            src={faker.image.image()}
          />
          <div className="header">{props.name}</div>
          <div className="meta">{props.descri}</div>
          <div className="description">
            {props.para}
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;