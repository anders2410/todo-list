import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => (
  <div className="todo-container">
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </ul>
  </div>
);

export default TodoList;
