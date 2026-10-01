import React, { useState } from "react";

// 07A: Live name greeting
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create an input labeled “Your name”. As the user types, display “Hello, [name]!” below it.

export default function LiveName() {
  const [name, setName] = useState("");
  return (
    <main>
      <h1>07A Live name greeting</h1>
      <label> Your name: 
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <p>Hello, {name}!</p>
    </main>
  );
}