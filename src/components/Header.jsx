import React from "react";

export default function Header({ total }) {
  return (
    <header className="header">
      <h1 className="logo">Taskly</h1>
      <nav className="nav">
        <a href="#board">Board</a>
        <a href="#reports">Reports</a>
        <a href="#settings">Settings</a>
      </nav>
      <span className="count">{total} tasks</span>
    </header>
  );
}
