import { render, screen} from '@testing-library/react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {
  const user = {
    name: 'Fernando',
    email: 'ernesto@aasd.com',
  };



  test('debe de mostrarse correctamente', () => {

    render(
      <UserContext.Provider value={{ user }}>
        <HomeScreen />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain("Fernando");
  })
});
