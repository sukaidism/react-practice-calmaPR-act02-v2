import React, { useState } from "react";

// 05C: Weather message
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Set const temperature = 29. Show “Cold” below 20, “Warm” from 20 through 29, and “Hot” from 30 up. Test 19, 20, 29, and 30.

export default function WeatherMessage() {
  const temperature = 30;
  return (
    <main>
      <h1>05C Weather message</h1>
      <p>
        <p>Tested Temperature: {temperature}</p>
        {temperature < 20 ? "Cold" : temperature <= 29 ? "Warm" : "Hot"}
      </p>
    </main>
  );
}
