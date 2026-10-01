import React, { useState } from "react";

// 07C: Event sign up
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a simple sign-up form with a name and a number of seats.
// Require a nonempty name and 1 to 4 seats. Show a helpful error or “Registered: [name] for [seats] seat(s).”

export default function SignUpEvent() {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(0);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const seatCount = Number(seats);

    if (name.trim() === "") {
      setMessage("Please enter a name.");
    } else if (seatCount < 1 || seatCount > 4) {
      setMessage("Please select between 1 and 4 seats.");
    } else {
      setMessage(`Registered: ${name} for ${seatCount} seat(s).`);
    }
  }

  return (
    <main>
      <h1>07C Event sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <label>
          Seats:
        </label>
        <input type="number" value={seats} onChange={event => setSeats(Number(event.target.value))} />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
