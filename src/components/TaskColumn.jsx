import React from "react";
import TaskCard from "./TaskCard.jsx";

export default function TaskColumn({ label, tasks, onStatusChange }) {
  return (
    <section className="column">
      <h2 className="column-title">
        {label} <span className="column-count">{tasks.length}</span>
      </h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onStatusChange={onStatusChange} />
      ))}
    </section>
  );
}
