/**
 * 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 */
export default (num: number) => {
    function fibonnaci(targetNumber: number): number[] {
        if (targetNumber <= 1) return [0, 1];
        const sequence: number[] = fibonnaci(targetNumber - 1);
        return [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]];
    }
    return fibonnaci(num).includes(num);
}

