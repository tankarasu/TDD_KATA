import {returnYearIndex, returnCenturyIndex} from "../src/functions/index"

describe("returnYearIndex test suite",()=>{
    it("should return good number depends parameters",()=>{
        expect(returnYearIndex(2006)).toBe(0);
        expect(returnYearIndex(2001)).toBe(1);
        expect(returnYearIndex(2030)).toBe(2);
        expect(returnYearIndex(2008)).toBe(3);
        expect(returnYearIndex(2015)).toBe(4);
        expect(returnYearIndex(2010)).toBe(5);
        expect(returnYearIndex(2022)).toBe(6);
    });
})

describe("returnCenturyIndex suite", ()=>{
  const yearOne = 1504
  const yearTwo = 1623
  const yearThree = 1734
  const yearFour = 1892
  const yearFive = 1987
  const yearSix = 2010
  const yearSeven = 2122
  const yearEight = 2234
  const yearNine = 2345
  const yearTen = 2456

  it("should return good number depends parameters",()=>{
    expect(returnCenturyIndex(yearOne, returnYearIndex(yearOne))).toBe(0);
    expect(returnCenturyIndex(yearTwo, returnYearIndex(yearTwo))).toBe(1);
    expect(returnCenturyIndex(yearThree, returnYearIndex(yearThree))).toBe(6);
    expect(returnCenturyIndex(yearFour, returnYearIndex(yearFour))).toBe(0);
    expect(returnCenturyIndex(yearFive, returnYearIndex(yearFive))).toBe(5);
    expect(returnCenturyIndex(yearSix, returnYearIndex(yearSix))).toBe(6);
    expect(returnCenturyIndex(yearSeven, returnYearIndex(yearSeven))).toBe(5);
    expect(returnCenturyIndex(yearEight, returnYearIndex(yearEight))).toBe(4);
    expect(returnCenturyIndex(yearNine, returnYearIndex(yearNine))).toBe(2);
    expect(returnCenturyIndex(yearTen, returnYearIndex(yearTen))).toBe(1);
  })
})
