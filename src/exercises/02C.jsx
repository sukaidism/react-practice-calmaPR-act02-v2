import React, { useState } from "react";

// 02C: Score badge
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create ScoreBadge with student and points props. Render one badge for Ana with 18 points and another for Leo with 15 points. Change only the passed props to try new values.

export default function ScoreBadge({student, points}) {
  return (
    <main>
      <h1>02C {student} Score badge</h1>
      <p>Name: {student}</p>
      <p>Points: {points}</p>
    </main>
  );
}
