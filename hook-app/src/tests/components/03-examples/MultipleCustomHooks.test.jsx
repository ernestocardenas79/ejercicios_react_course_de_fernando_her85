import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {

  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({counter:0, increment: mockIncrement});

  beforeEach(()=>{
      jest.clearAllMocks()
  })

  test('debe mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<MultipleCustomHooks/>);

    expect(screen.getByText('Loading....'));
    expect(screen.getByText('BreakingBad Quotes'));

    const nextButton= screen.getByRole('button', {name:"next quote"});
    expect(nextButton).toBeTruthy()

  });

  test('debe de mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      loading: false,
      error: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Hola Mundo')).toBeTruthy();
    expect(screen.getByText('Fernando')).toBeTruthy();

    const nextButton= screen.getByRole('button', {name:"next quote"});
    expect(nextButton.disabled).toBeFalsy()

  });

  test('debe llamar la funcion incremetar ',()=>{

    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      loading: false,
      error: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton= screen.getByRole('button', {name:"next quote"});
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  })
});
