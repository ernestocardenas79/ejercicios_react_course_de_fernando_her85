// import "./styles.css";
import { TodoListItem } from "./components/TodoListItem";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../../hooks/useTodos";


export const TodoApp = () => {
  
const {
  todos,
  deleteTodoHandler,
  toggleTodoHandler,
  newTodoHandler,
  todosCount,
  pedingTodosCount
} = useTodos()

  return (
    <div>
      <h1>TodoApp {todosCount}, <small>pendientes: {pedingTodosCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoListItem
            todos={todos}
            handleToggle={toggleTodoHandler}
            handleDelete={deleteTodoHandler}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={newTodoHandler} />
        </div>
      </div>
    </div>
  );
};
