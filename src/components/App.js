import React from "react";
import TodoFilter from "./todoFilter/TodoFilter";
import TodoForm from "./todoForm/TodoForm";
import TodoList from "./todoList/TodoList";

const App = () => {
  return (
    <div>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
};

export default App;
