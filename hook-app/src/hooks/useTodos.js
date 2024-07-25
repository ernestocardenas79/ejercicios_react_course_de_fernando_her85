import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodos = ()=>{
    const [todos, todoDispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);


      const newTodoHandler = (newTodo) => {
        todoDispatch({ type: "add", payload: newTodo });
      };
    
      const deleteTodoHandler = (todoId) => {
        const action = {
          type: "delete",
          payload: todoId,
        };
    
        todoDispatch(action);
      };
    
      const toggleTodoHandler = (todoId) => {
        todoDispatch({
          type: "toggle",
          payload: todoId,
        });
      };

    return {
        todos,
        deleteTodoHandler,
        toggleTodoHandler,
        newTodoHandler,
        todosCount: todos.length,
        pedingTodosCount: todos.filter(todo=>!todo.done).length
    }
}