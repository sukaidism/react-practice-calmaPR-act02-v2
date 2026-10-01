import React, { useState } from "react";

// 04C: Cheer counter
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Show a button labeled “Cheer”. Each click increases a count. When the count reaches three, also show “Great support!”.

export default function Exercise04C() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>04C Cheer counter</h1>
      <p>Cheers: {count}</p>
      {count >= 3 ? <p>Great support!</p> : ''}
      <button onClick={() => setCount(previous => previous + 1)}>Cheer</button>
    </main>
  );
}
