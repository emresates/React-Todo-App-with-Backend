import React from "react";
import ContentFooter from "./ContentFooter";
import TodoList from "./TodoList";

function Content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as a complete</label>

        <TodoList />
      </section>

      <ContentFooter />
    </>
  );
}

export default Content;
