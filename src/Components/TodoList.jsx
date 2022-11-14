import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggle,
  destroy,
  getTodosAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from "../Redux/Todos/Services";
import Loading from "./Loading";
import Error from "./Error";
import { selectFilteredTodos } from "../Redux/Todos/TodosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);

  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  // const handleDestroy = (id) => {
  //   if (window.confirm("Are you sure")) {
  //     dispatch(destroy(id));
  //   }
  // };

  const handleDestroy = async (id) => {
    if (window.confirm("Are you sure")) {
      await dispatch(removeTodoAsync(id));
    }
  };
  // toggleTodoAsync
  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              type="checkbox"
              className="toggle"
              checked={item.completed}
              // onChange={() => dispatch(toggle({ id: item.id }))}
              onChange={() => handleToggle(item.id, !item.completed)}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
