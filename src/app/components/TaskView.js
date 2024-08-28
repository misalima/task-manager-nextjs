import React from "react";

const TaskView = ({ tasks, onTaskClick }) => {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => onTaskClick(task)}>
            {task.title} {task.isCompleted ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskView;
