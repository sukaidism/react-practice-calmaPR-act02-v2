import React, { useState } from "react";

// 06C: Completed tasks
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create four task objects with id, label, and done values. Show only tasks where done is true. Also show how many completed tasks there are.

export default function CompletedTask() {
  const tasks = [
    { 
      id: 1,
      title: "PDC50 Assignment Lab 02",
      done: true
    },
    { 
      id: 2,
      title: "PDC60 Assignment 2",
      done: false
    },
    { 
      id: 3,
      title: "ITE40 Review Module 08",
      done: true
    },
    { 
      id: 4,
      title: "SAM10 Lab Activity 06",
      done: false
    },
  ];

  const completed = tasks.filter(task => task.done); 
  return (
    <main>
      <h1>06C Completed tasks</h1>
      <ul>
        {completed.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <p>Completed tasks: {completed.length}</p>
    </main>
  );
}
