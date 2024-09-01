import sum from "../sum";

describe('sum unit tests', () => {

    test('sum(12) deve retornar 77', () => {
        expect(sum(12)).toBe(77);
    });
});