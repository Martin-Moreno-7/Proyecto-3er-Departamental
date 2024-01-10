import React, { useState, useEffect } from "react";

const DinosaurGame = () => {
  const [score, setScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const handleKeyPress = (e) => {
    if (e.keyCode === 32) {
      if (!isJumping) {
        jump();
      }
    }
  };

  const jump = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    const gameInterval = setInterval(() => {
      increaseScore();
    }, 1000);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      clearInterval(gameInterval);
    };
  }, [score]);

  return (
    <div>
      <h1>Juego del Dinosaurio Google</h1>
      <div>
        <p>Score: {score}</p>
        <div className={`dinosaur ${isJumping ? "jump" : ""}`} onClick={jump} />
      </div>
    </div>
  );
};

export default DinosaurGame;
