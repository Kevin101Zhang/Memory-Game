import React from "react";

function Card (props) {

    return (
      <div>
        <h3>Name:{props.name}</h3>
        <img
          src={props.imgURL}
          alt="cat"
          clicked={props.clicked}
          onClick={()=>props.handleChange(props.id)}
        />
      </div>
    );
}

export default Card;
