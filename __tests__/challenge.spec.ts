const  {challenge1, challenge2}  = require('./../challenge');

describe('Challenge 1', () => {
    it('should factorialize positive numbers correctly', () => {
        expect(challenge1(1)).toBe(1);
        expect(challenge1(5)).toBe(120);
        expect(challenge1(10)).toBe(3628800);
    });
    it('should return 1 when factorializing 0', () => {
        expect(challenge1(0)).toBe(1);
    });

});

describe('Challenge 2', () => {
    it('should compare prefix name existent', () => {
        expect(challenge2('will')).toBe(false);
        expect(challenge2('johnson')).toBe(false);
        expect(challenge2('bobbie')).toBe(false);
    });
    it('should compare prefix name existent', () => {
        expect(challenge2('mauricio')).toBe(true);
        expect(challenge2('lucas')).toBe(true);
        expect(challenge2('rodrigo')).toBe(true);
    });
});

