import React, { useState } from "react";

// 03B: Counter and reset
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Add one button that increases the attendance number by one and another that resets it to zero.

export default function CounterReset() {
  const [present, setPresent] = useState(0);
  return (
    <main>
      <h1>03B Counter and reset</h1>
      <p>Present: {present}</p>
      <button onClick={() => setPresent(previous => previous + 1)}>Add</button>
      <button onClick={() => setPresent(0)}>Reset</button>
    </main>
  );
}
