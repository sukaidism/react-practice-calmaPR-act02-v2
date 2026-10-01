import React, { useState } from "react";

// 02A: Greeting by name
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create a Greeting component that accepts a name prop. Render it from the exercise component with name="Ana".

export default function Greeting({name}) {
  return (
    <main>
      <h1>02A Greeting by name</h1>
      <p>Hello, {name}!</p>
    </main>
  );
}