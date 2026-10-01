import React, { useState } from "react";

// 05B: Pass or retry
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Set const score = 74. Show “Pass” when score is at least 75; otherwise show “Retry”. Then test with 75.

export default function PassOrRetry() {
  const score = 75; 
  return (
    <main>
      <h1>05B Pass or retry</h1>
      <p>{score >= 75 ? "Pass" : "Retry"}</p>
    </main>
  );
}
