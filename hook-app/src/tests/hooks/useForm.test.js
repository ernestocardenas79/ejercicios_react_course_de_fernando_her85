import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Ernesto',
    email: 'ernesto@algo.com',
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [values, handleInputChange, reset] = result.current;

    expect(values).toBe(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });
  test('debe de cambiar el valor del formulario ', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({ target: { name: 'name', value: 'los tres' } });
    });

    const [values] = result.current;

    expect(values).toEqual({ ...initialForm, name: 'los tres' });
  });
  test('debe de re-establecer el formulario con reset', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({ target: { name: 'name', value: 'los tres' } });
      reset();
    });

    const [values] = result.current;

    expect(values).toBe(initialForm);
  });
});
