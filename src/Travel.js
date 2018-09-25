import React from "react";

const Travel = props => (
  <article>
    <h3> {props.destination} </h3>
    <h5> {props.country} </h5>
    <img src={props.photo} alt={props.country} />
    <p>{props.distance}</p>
  </article>
);

export default Travel;
