import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/reducers/todoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const dispatch = useDispatch();

  const addSingleTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={addSingleTodo}>
        <input type="text" value={title} onChange={changeTitle} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
