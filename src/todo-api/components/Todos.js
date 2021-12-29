import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo, toggleTodo, deleteTodo } from "../redux/todoSlice";
import TodoForm from "./TodoForm";

const Todos = () => {
  const { todoList } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleInputChange = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  const handleBtnClick = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todoList.map((todo, index) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleInputChange(todo.id)}
            />
            <button onClick={() => handleBtnClick(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
