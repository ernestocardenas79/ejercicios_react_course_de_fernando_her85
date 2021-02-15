import React from 'react';
import { Login } from '../../../components/09-useContext/Login';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Preubas en <LoginScreen />', () => {
  const setUser = jest.fn(() => {});
  const user = {
    name: 'Ernesto',
    id: 774,
  };

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <Login />
    </UserContext.Provider>
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de llamarse la funcion setUser con lo argumentos esperados', () => {
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalledWith(user);
  });
});
