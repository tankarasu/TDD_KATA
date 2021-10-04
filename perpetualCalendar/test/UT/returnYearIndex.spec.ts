// Internal requirements
import {returnYearIndex} from "../../src/functions"

describe("returnYearIndex test suite",()=>{
    it("should return good index depends parameters",()=>{
        expect(returnYearIndex(2006)).toBe(0);
        expect(returnYearIndex(2001)).toBe(1);
        expect(returnYearIndex(2030)).toBe(2);
        expect(returnYearIndex(2008)).toBe(3);
        expect(returnYearIndex(2015)).toBe(4);
        expect(returnYearIndex(2010)).toBe(5);
        expect(returnYearIndex(2022)).toBe(6);
    });
})
