import React, { useState } from "react";

// 06B: Book titles
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make an array of at least three book objects with unique id and title values. Display their titles in a list.

export default function BookTitles() {
  const books = [
    { id: 1, title: "The Hunger Games: Sunrise of the Reaping" },
    { id: 2, title: "The Fault in our Stars" },
    { id: 3, title: "Divergent" }
  ];
  return (
    <main>
      <h1>06B Book titles</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </main>
  );
}
