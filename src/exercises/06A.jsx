import React, { useState } from "react";

// 06A: Names on the board
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make an array of three names and show them as list items using map().

export default function NamesOnTheBoard() {
  const names = ["Zhongli", "Raiden", "Furina"];
  return (
    <main>
      <h1>06A Names on the board</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
