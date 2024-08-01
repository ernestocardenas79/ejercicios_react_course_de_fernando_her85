import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { useTodos } from '../../../hooks/useTodos';
import { demoTodos } from '../../fixtures/demoTodos';
import { render, screen } from '@testing-library/react';

jest.mock('../../../hooks/useTodos')

describe('Pruebas en <TodoApp/>', () => {

  useTodos.mockReturnValue({
    todos: demoTodos,
    todosCount:2,
    deleteTodoHandler: jest.fn(),
    toggleTodoHandler: jest.fn(),
    newTodoHandler: jest.fn(),
    pedingTodosCount:1
  })


  test('debe de mostrarse correctamente', () => {
    render(<TodoApp/>)
    expect(screen.getByText('1. Aprender React')).toBeTruthy();
  });
});
