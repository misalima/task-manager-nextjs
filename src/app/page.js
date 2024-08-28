"use client"
import React, { useState } from "react";
import TaskView from "./components/TaskView";
import Task from "./models/Task";

const sampleTasks = [
  new Task(1, "Buy groceries", "Milk, Bread, Eggs"),
  new Task(2, "Walk the dog", "Take the dog for a walk in the park"),
  new Task(
    3,
    "Complete Next.js tutorial",
    "Finish the basic setup and understanding"
  ),
];
export default function Home() {
  const [tasks, setTasks] = useState(sampleTasks);

  const handleTaskClick = (task) => {
    alert(`Task clicked: ${task.title}`);
  };
  return (
    <div>
      <TaskView tasks={tasks} onTaskClick={handleTaskClick} />
    </div>
  );
}
