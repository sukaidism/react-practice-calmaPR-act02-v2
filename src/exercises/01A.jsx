import React, { useState } from "react";

// 01A: Welcome message
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a component that shows the heading “Welcome to React” and a paragraph with your first name.

export default function Exercise01A() {
  const firstName = "Paul Richard";
  return (
    <main>
      <h1>Welcome to React</h1>
      <p>{firstName}</p>
    </main>
  );
}
