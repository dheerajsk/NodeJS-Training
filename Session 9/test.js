const expect = require('chai').expect;

const calc = require("./calc");

describe("Calc Module", () => {

    it('should return result as 20 for 10+10', () => {
        expect(calc.add(10, 10)).to.equal(20);
    });

    it('should return result as 0 for -10+20', () => {
        expect(calc.add(-10, 20)).to.equal(0);
    });

    it('should return result as 20 for 30-10', () => {
        expect(calc.sub(30, 10)).to.equal(20);
    });

    it('should return result as 20 for 200/10', () => {
        expect(calc.div(200, 10)).to.equal(20);
    });

    it('should return result as 20 for 2*10', () => {
        expect(calc.mul(2, 10)).to.equal(20);
    });
});