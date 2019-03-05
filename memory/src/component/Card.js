import React from "react";

function Card(props) {
  
  const styleImg = {
    height: "200px",
    width: "200px",
  };

  const styleDiv={
    backgroundColor: "lightblue",
    width: "200px",
    height:"225px",
    textAlign: "center",
    float:"left",
    margin: "5px",
    marginBottom: "50px",
    fontFamily: "fantasy",
    fontSize:"15px",
  }

  return (
    <div style={styleDiv}>
      <h3>{props.name}</h3>
      <img style={styleImg}
        src={props.imgURL}
        alt="FoamArt"
        clicked={props.clicked}
        onClick={() => props.handleChange(props.id)}
      />
    </div>
  );
}

export default Card;
