import { UserContext } from '../../../components/09-useContext/UserContext';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <AppRoute>', () => {
  const user = {
    id: 1,
    name: 'Ernesto',
  };


  test('Debe de mostrarse correctamente', () => {
    render(
      <MemoryRouter>
      <UserContext.Provider value={{ user }}>
        <AppRouter />
      </UserContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('HomeScreen')).toBeTruthy();
  });

  test('Debe de mostrar el LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
      <UserContext.Provider value={{ user }}>
        <AppRouter />
      </UserContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByLabelText('h1').innerHTML).toBe('Login');
  });
});
