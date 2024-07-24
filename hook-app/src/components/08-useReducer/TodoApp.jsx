import { todoReducer } from "./todoReducer";
import "./styles.css";
import { TodoListItem } from "./components/TodoListItem";
import { TodoAdd } from "./components/TodoAdd";
import { useEffect, useReducer } from "react";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, todoDispatch] = useReducer(todoReducer, [], init);

  const handleAddTodo = (newTodo) => {
    console.log("agerando", newTodo);
    todoDispatch({ type: "add", payload: newTodo });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log("borrando ", todoId);
    const action = {
      type: "delete",
      payload: todoId,
    };

    todoDispatch(action);
  };

  const handleToggle = (todoId) => {
    todoDispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* Todo List, arg  todos */}
          <TodoListItem
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
