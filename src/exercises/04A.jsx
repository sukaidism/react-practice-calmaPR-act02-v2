import React, { useState } from "react";

// 04A: Thank you button
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Display a button labeled “Say thanks”. When clicked, show “Thank you!” on the page.

export default function SayThanks() {
  const [message, setMessage] = useState(false);
  
  return (
    <main>
      <h1>04A Thank you button</h1>
      <p>{message ? "Thank you!" : ""}</p>
      <button onClick={() => setMessage(true)}>Say thanks</button>
    </main>
  );
}
