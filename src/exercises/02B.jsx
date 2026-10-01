import React, { useState } from "react";

// 02B: Two student cards
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create StudentCard with name and course props. Render two cards with different names and courses.

export default function StudentCard({name, course}) {
  return (
    <main>
      <h1>02B {name} Card</h1>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
    </main>
  );
}
