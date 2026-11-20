import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import Header from "./components/Header.jsx";
import AddTaskForm from "./components/AddTaskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";

export const COLUMNS = [
  { key: "todo", label: "To do" },
  { key: "in_progress", label: "In progress" },
  { key: "done", label: "Done" },
];

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/tasks.json")
      .then((res) => setTasks(res.data))
      .catch(() => setError("Could not load tasks"));
  }, []);

  function addTask(title) {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title, status: "todo", dueDate: null },
    ]);
  }

  function changeStatus(id, status) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  }

  const grouped = _.groupBy(tasks, "status");

  return (
    <div className="app">
      <Header total={tasks.length} />
      <AddTaskForm onAdd={addTask} />
      {error && <p className="error">{error}</p>}
      <main className="board">
        {COLUMNS.map((col) => (
          <TaskColumn
            key={col.key}
            label={col.label}
            tasks={grouped[col.key] || []}
            onStatusChange={changeStatus}
          />
        ))}
      </main>
    </div>
  );
}
