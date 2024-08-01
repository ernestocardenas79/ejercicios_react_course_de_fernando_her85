import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from '../../../components/09-useContext/Login';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Preubas en <LoginScreen />', () => {
  const setUser = jest.fn(() => {});
  const user = {
    name: 'Ernesto',
    id: 774,
  };

  test('debe de llamarse la funcion setUser con lo argumentos esperados', () => {
    render(
      <UserContext.Provider value={{ setUser }}>
        <Login />
      </UserContext.Provider>
    );

    const loginButton = screen.getByRole('button');
    fireEvent.click(loginButton)

    expect(setUser).toHaveBeenCalledWith(user);
  });
});
