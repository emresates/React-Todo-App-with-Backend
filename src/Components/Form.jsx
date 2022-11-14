import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../Redux/Todos/TodosSlice";
import { addTodoAsync } from "../Redux/Todos/Services";
import Error from "./Error";
import Loading from "./Loading";

function Form() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.addNewTodo.isLoading);
  const error = useSelector((state) => state.todos.addNewTodo.error);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    // dispatch(addTodo({ title}));
    await dispatch(addTodoAsync({ title }));

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        disabled={isLoading}
        className="new-todo"
        placeholder="What need to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </form>
  );
}

export default Form;
