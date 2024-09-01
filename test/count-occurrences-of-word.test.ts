import countOccurrencesOfWord from "../count-occurrences-of-word";

describe('count occurrences of word testes de unidade', () => { 

    test('deve retornar 3, pois a letra "a" aparece 3 vezes.', () => {
        const expectedLength = 3;
        const word = 'eu não sou o goku, abacaxi 3d.';
        const result = countOccurrencesOfWord('a', word);
         expect(result).toBe(expectedLength);
     });

    test('deve retornar 2, pois a letra "e" aparece 2 vezes.', () => {
       const expectedLength = 2;
       const word = 'teste';
       const result = countOccurrencesOfWord('e', word);
        expect(result).toBe(expectedLength);
    });

});