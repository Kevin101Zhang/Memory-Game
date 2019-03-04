import React from "react";

import CardData from "./component/CardData";
import Card from "./component/Card";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      CardState: CardData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      
    var updatedCardState = prevState.CardState.map(upCard => {
        if (upCard.id === id) {
          upCard.clicked = upCard.clicked + 1;
        }
        return upCard;
      });

      return {
        CardState: updatedCardState
      };
    });
  }

  render() {
    var CardComponent = this.state.CardState.map(card => (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        imgURL={card.imgURL}
        clicked={card.clicked}
        handleChange={this.handleChange}
      />
    ));

    return <div>{CardComponent}</div>;
  }
}
export default App;
