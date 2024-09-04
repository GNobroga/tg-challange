import isValueInFibonacciSequence from '../functions/fibonacci-sequence';

describe('finonnaci sequence testes de unidade', () => {
    test('deve retorna true, pois o 5 existe.', () => {
        expect(isValueInFibonacciSequence(5)).toBe(true);
    });

    test('deve retorna false, pois o 6 não existe.', () => {
        expect(isValueInFibonacciSequence(6)).toBe(false);
    });

    test('se o número for 0, deve retornar true.', () => {
        expect(isValueInFibonacciSequence(0)).toBe(true);
        expect(isValueInFibonacciSequence(1)).toBe(true);
    });
});