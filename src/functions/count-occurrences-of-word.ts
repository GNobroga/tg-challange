
//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

export default (letter: string, text: string) => {
    return text.split('')
        .filter(char => char.localeCompare(letter, 'pt-BR', { sensitivity: 'accent' }) === 0)
        .length;
};