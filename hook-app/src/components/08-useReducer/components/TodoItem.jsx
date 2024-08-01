export const TodoItem = ({todo, handleToggle, handleDelete, index}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${todo.done? "text-decoration-line-through":""}`}
        onClick={() => handleToggle(todo.id)}
        aria-label= "span"
      >
        {index + 1}. {todo.desc}
      </span>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
