import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem } from '../../../components/08-useReducer/components/TodoItem';
import { demoTodos } from '../../fixtures/demoTodos';
describe('Pruebas en <TodoItem>', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoItem
      // eslint-disable-next-line no-const-assign
      todo={demoTodos[0]}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      index={0}
    />
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar la funcion handleDelete', () => {
    wrapper.find('button').simulate('click');

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('debe de llamar la funcion handleToogle', () => {
    wrapper.find('p').simulate('click');

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('debe de mostrar el texto correctamente', () => {
    const p = wrapper.find('p');

    expect(p.text()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test('debe de tener la clase complete si el Todo esta Done', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoItem todo={todo} />);

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
