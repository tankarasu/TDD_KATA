// Internal requirements
import { returnCenturyIndex } from "../../src/functions"

describe("returnCenturyIndex suite", ()=>{
  it("should return 0",()=>{
    expect(returnCenturyIndex(1796, 1)).toBe(0);
    expect(returnCenturyIndex(1597, 2)).toBe(0);
    expect(returnCenturyIndex(1898, 3)).toBe(0);
    expect(returnCenturyIndex(1994, 5)).toBe(0);
    expect(returnCenturyIndex(1695, 6)).toBe(0);
  })

  it("should return 1",()=>{
    expect(returnCenturyIndex(1690, 0)).toBe(1);
    expect(returnCenturyIndex(1797, 2)).toBe(1);
    expect(returnCenturyIndex(1598, 3)).toBe(1);
    expect(returnCenturyIndex(1899, 4)).toBe(1);
    expect(returnCenturyIndex(1995, 6)).toBe(1);
  })

  it("should return 2",()=>{
    expect(returnCenturyIndex(1990, 0)).toBe(2);
    expect(returnCenturyIndex(1696, 1)).toBe(2);
    expect(returnCenturyIndex(1798, 3)).toBe(2);
    expect(returnCenturyIndex(1599, 4)).toBe(2);
    expect(returnCenturyIndex(1894, 5)).toBe(2);
  })

  it("should return 3",()=>{
    expect(returnCenturyIndex(1996, 1)).toBe(3);
    expect(returnCenturyIndex(1697, 2)).toBe(3);
    expect(returnCenturyIndex(1799, 4)).toBe(3);
    expect(returnCenturyIndex(1594, 5)).toBe(3);
    expect(returnCenturyIndex(1895, 6)).toBe(3);
  })

  it("should return 4",()=>{
    expect(returnCenturyIndex(1890, 0)).toBe(4);
    expect(returnCenturyIndex(1997, 2)).toBe(4);
    expect(returnCenturyIndex(1698, 3)).toBe(4);
    expect(returnCenturyIndex(1794, 5)).toBe(4);
  })

  it("should return 5",()=>{
    expect(returnCenturyIndex(1590, 0)).toBe(5);
    expect(returnCenturyIndex(1896, 1)).toBe(5);
    expect(returnCenturyIndex(1998, 3)).toBe(5);
    expect(returnCenturyIndex(1699, 4)).toBe(5);
    expect(returnCenturyIndex(1795, 6)).toBe(5);
  })

  it("should return 6",()=>{
    expect(returnCenturyIndex(1790, 0)).toBe(6);
    expect(returnCenturyIndex(1596, 1)).toBe(6);
    expect(returnCenturyIndex(1897, 2)).toBe(6);
    expect(returnCenturyIndex(1999, 4)).toBe(6);
    expect(returnCenturyIndex(1694, 5)).toBe(6);
  })
})
