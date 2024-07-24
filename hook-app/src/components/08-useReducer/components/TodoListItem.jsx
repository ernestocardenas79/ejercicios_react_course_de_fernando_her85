import { TodoItem } from "./TodoItem";

export const TodoListItem = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          index={i}
        />
      ))}
    </ul>
  );
};
