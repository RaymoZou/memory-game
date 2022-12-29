import React, { useState } from "react";
import Card from "./Card";
import { v4 as uuiv4 } from 'uuid';

function App() {

  const [cards, setCards] = useState([{ title: 'card 1', isClicked: false, id: uuiv4() },
  { title: 'card 2', isClicked: false, id: uuiv4() },
  { title: 'card 3', isClicked: false, id: uuiv4() }]);
  const [score, setScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }

  function handleClick(cardId) {
    const clickedCard = cards.find(card => card.id === cardId);
    if (!clickedCard.isClicked) {
      incrementScore();
      setCards(cards.map(card => (card === clickedCard ? { ...card, isClicked: true } : card)))
    } else {
      resetScore();
      // TODO: change the isClicked of each card back to false;
    }
  };

  return (
    <>
      <div className="score">{score}</div>
      <div className="card-container">
        {cards.map(card => <Card
          handleClick={handleClick}
          id={card.id}
          key={card.id}
          title={card.title}>
        </Card>)}
      </div>
    </>
  );
}

export default App;
