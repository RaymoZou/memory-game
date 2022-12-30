import React, { useEffect, useState } from "react";
import Card from "./Card";
import { v4 as uuiv4 } from 'uuid';

function App() {

  const [cards, setCards] = useState([
    { imgURL: 'https://imgflip.com/s/meme/Distracted-Boyfriend.jpg', id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Running-Away-Balloon.jpg', id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Mocking-Spongebob.jpg', isClicked: false, id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Epic-Handshake.jpg', isClicked: false, id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Disaster-Girl.jpg', isClicked: false, id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Ancient-Aliens.jpg', isClicked: false, id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/X-X-Everywhere.jpg', isClicked: false, id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Waiting-Skeleton.jpg', isClicked: false, id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg', isClicked: false, id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Futurama-Fry.jpg', isClicked: false, id: uuiv4() },
    { imgURL: 'https://imgflip.com/s/meme/Leonardo-Dicaprio-Cheers.jpg', isClicked: false, id: uuiv4() },
  ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    if (score >= bestScore) setBestScore(score);
  }, [score, bestScore])

  function incrementScore() {
    setScore(score + 1);
  };

  function resetScore() {setScore(0)};

  function handleClick(cardId) {

    const clickedCard = cards.find(card => card.id === cardId);

    if (!clickedCards.includes(clickedCard)) {
      incrementScore();
      setClickedCards([...clickedCards, clickedCard])
      scrambleCards();
    } else {
      resetScore();
      setClickedCards([]);
    }
  };

  function scrambleCards() {
    var scrambledCards = [];
    var numArr = [];
    while (numArr.length < cards.length) {
      var num = Math.floor(Math.random() * cards.length);
      if (numArr.indexOf(num) === -1) numArr.push(num);
    }
    for (let i = 0; i < numArr.length; i++) {
      scrambledCards.push(cards[numArr[i]]);
    }
    setCards(scrambledCards);
  }

  return (
    <>
    <div className="score-container">
      <div className="current-score">Score: {score}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
      <div className="card-container">
        {cards.map(card => <Card
          handleClick={handleClick}
          id={card.id}
          key={card.id}
          imgURL={card.imgURL}>
        </Card>)}
      </div>
    </>
  );
}

export default App;
