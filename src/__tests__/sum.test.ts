import sum from "../functions/sum";

describe('sum unit tests', () => {

    test('sum(13) deve retornar 91', () => {
        expect(sum(13)).toBe(91);
    });
});