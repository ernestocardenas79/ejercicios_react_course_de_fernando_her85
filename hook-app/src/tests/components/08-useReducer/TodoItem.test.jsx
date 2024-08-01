import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../components/08-useReducer/components/TodoItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoItem>', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  beforeEach(()=> jest.clearAllMocks())

  test('debe de mostrarse correctamente', () => {
    render(<TodoItem
      todo={demoTodos[0]}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      index={0}
    />);

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
 
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  
  });

  test('debe de llamar la funcion handleDelete', () => {
    render(<TodoItem
      todo={demoTodos[0]}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      index={0}
    />)
    const todoElement = screen.getByRole('button')
    fireEvent.click(todoElement)

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe de llamar la funcion handleToogle', () => {
    render(<TodoItem
      todo={demoTodos[0]}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      index={0}
    />)
    const todoElement = screen.getByLabelText('span')
    fireEvent.click(todoElement)

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });
 

  test('debe de tener la clase complete si el Todo esta Done', () => {
    const todo = demoTodos[0];
    todo.done = true;

    render(<TodoItem todo={todo} />);

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');

  });
});
