import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas con el reducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  describe('debe de agregar un TODO', () => {
    const newTodo = { id: 3, desc: 'Ver Suits', done: false };
    const newState = todoReducer(demoTodos, {
      type: 'add',
      payload: newTodo,
    });

    expect(newState.length).toBe(3);
    expect(newState).toEqual([...demoTodos, newTodo]);
  });

  describe('debe de eliminar un todo', () => {
    const newState = todoReducer(demoTodos, {
      type: 'delete',
      payload: 2,
    });

    expect(newState.length).toEqual(1);
    expect(newState).toEqual([demoTodos[0]]);
  });

  describe('debe hacer el TOGGLE del TODO', () => {
    const state = todoReducer(demoTodos, {
      type: 'toggle',
      payload: 2,
    });

    expect(state[1].done).toBe(true);
    expect(state[0]).toEqual(demoTodos[0]);
  });
});
