import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const {counter, decrement, increment, reset} = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe de tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));

    const { increment } = result.current;

    act(() => 
      increment()
    );

    const { counter } = result.current;

    expect(counter).toBe(101);
  });
  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));

    const { decrement } = result.current;

    act(() => 
      decrement()
    );

    const { counter } = result.current;

    expect(counter).toBe(99);
  });
  test('debe de resetear el counter a 100', () => {
    const { result } = renderHook(() => useCounter(100));

    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(100);
  });
});
