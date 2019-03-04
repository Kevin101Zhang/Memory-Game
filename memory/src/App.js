import React from "react";

import CardData from "./component/CardData";
import Card from "./component/Card";

class App extends React.Component {
    
    constructor(){
        super()
        this.state={
            CardState: CardData,
        }
        this.handleClick =this.handleClick.bind(this);
    }

    handleClick(id){
        this.setState(prevState=>{
            const updatedCardState = prevState.CardState.map(card=>{
                if( card.id === id){
                    card.clicked = !card.clicked;
                }
                return card;
            })
            return {
                CardState: updatedCardState,
            }
        });

    }

 render() {

    const CardComponent = this.state.CardState.map(card => (
      <Card
        key={card.id}
        name={card.name}
        imgURL={card.imgURL}
        clicked = {card.clicked}
      />
    ));

    return <div>{CardComponent}</div>;
  }
}
export default App;
