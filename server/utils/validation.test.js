const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('reject non string value', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('reject string with only space', () => {
        var res = isRealString('    ');
        expect(res).toBe(false);
    });

    it('allow string', () => {
        var res = isRealString(' sujon ');
        expect(res).toBe(true);
    })
})