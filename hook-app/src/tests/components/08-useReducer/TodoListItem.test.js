import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/components/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';
describe('Pruebas en <TodoListItem>', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      // eslint-disable-next-line no-const-assign
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener 2 TodoListItems', () => {
    expect(wrapper.find('TodoItem').length).toBe(demoTodos.length);

    expect(wrapper.find('TodoItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
  });
});
