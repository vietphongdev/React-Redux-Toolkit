import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { todoList } = useSelector((state) => state.todoReducer);

  return (
    <div className="navbar">
      <h1>My Redux Toolkit App Todos</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>{`Total Todos: ${todoList.length}`}</li>
      </ul>
    </div>
  );
};

export default Navbar;
