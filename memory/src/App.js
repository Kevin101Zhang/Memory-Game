import React from "react";

import CardData from "./component/CardData";
import Card from "./component/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      CardState: CardData,
      score: 0,
      highScore: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  youLoss = () => {
    alert(`You Loss\n Final Score: ${this.state.score}`);

    var ResetData = this.state.CardState.map(resetting => {
      if (resetting.clicked === 1) {
        resetting.clicked = 0;
      }
      return resetting;
    });
    return {
      CardState: ResetData
    };
  };

  Score = () => {
    this.setState(state => {
      return { score: state.score + 1 };
    });
  };

  randomizer = () => {
    var cardSleeve = document.querySelector(".cardDiv");
    for (var i = cardSleeve.children.length; i >= 0; i--) {
      cardSleeve.appendChild(cardSleeve.children[(Math.random() * i) | 0]);
    }
  };

  handleChange(id) {
    this.setState(prevState => {
      var updatedCardState = prevState.CardState.map(upCard => {
        if (upCard.id === id && upCard.clicked > 0) {
          this.youLoss();
          this.randomizer();
          // this.ScoreReset();
        } else if (upCard.id === id) {
          upCard.clicked = upCard.clicked + 1;
          this.Score();
          this.randomizer(this.state.CardState);
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

    return <div className="cardDiv">{CardComponent}</div>;
  }
}
export default App;
