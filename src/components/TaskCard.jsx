import React from "react";
import moment from "moment";

const STATUSES = ["todo", "in_progress", "done"];

export default function TaskCard({ task, onStatusChange }) {
  const overdue =
    task.dueDate && task.status !== "done" && moment(task.dueDate).isBefore(moment());

  return (
    <article className="card">
      <span className={`badge badge-${task.status}`}>{task.status.replace("_", " ")}</span>
      <h3 className="card-title">{task.title}</h3>
      <div className="card-meta">
        <span className={overdue ? "due overdue" : "due"}>
          {task.dueDate ? moment(task.dueDate).fromNow() : "No due date"}
        </span>
        <select
          className="status-select"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s.replace("_", " ")}
            </option>
          ))}
        </select>
      </div>
    </article>
  );
}
