import React from "react";

class Card extends React.Component{
    render(props){
        return(
            <div>
                <h3>Name:{this.props.name}</h3>
                <img src={this.props.imgURL} alt="cat"></img>
                <button value ={this.props.clicked} type="button" onClick={()=>this.props.handleClick(this.props.clicked.id)}>Click Me</button>
            </div>
        )
    }
}

export default Card;