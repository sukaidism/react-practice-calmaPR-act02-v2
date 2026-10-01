import React, { useState } from "react";

// 03C: Score with a limit
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a score that starts at 0. Each click adds 5, but the score must never go above 20. Add a reset button.

export default function ScoreWithLimit() {
  const [score, setScore] = useState(0);
  return (
    <main>
      <h1>03C Score with a limit</h1>
      <p>Score: {score}</p>
      <button onClick={() => setScore(previous => Math.min(previous + 5, 20))}>Add 5 points</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </main>
  );
}
