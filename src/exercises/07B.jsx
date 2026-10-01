import React, { useState } from "react";

// 07B: Name form
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a form with a name input and Submit button. When submitted, show “Please enter a name.” if it is empty or only spaces. Otherwise show “Saved: [name]”.

export default function NameForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(name.trim() === "" ? "Please enter a name." : `Saved: ${name}`);
  }
  return (
    <main>
      <h1>07B Name form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
