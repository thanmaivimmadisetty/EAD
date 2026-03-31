import React from "react";

function StudentCard(props) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      width: "200px"
    }}>
      <img src={props.image} alt="profile" width="100%" />
      <h3>{props.name}</h3>
      <p>Branch: {props.branch}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentCard;