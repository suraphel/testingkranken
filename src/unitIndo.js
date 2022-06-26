// this is the cart unit and its main job is to encompass the unit components

import React from "react";

function unitIndo(props) {
  return (
    <div>
      <h1> {props.name}</h1>
      <h1> {props.company}</h1>
      <h1> {props.email}</h1>
    </div>
  );
}

export default unitIndo;
