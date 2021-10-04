// Internal Requirements:
import { returnMonthIndex } from "../../src/functions"

describe("returnMonthIndex suite", ()=>{
  it("should return 0", ()=>{
    expect(returnMonthIndex(1596, "May")).toBe(0)
    expect(returnMonthIndex(1590, "Aug")).toBe(0)
    expect(returnMonthIndex(1595, "Feb")).toBe(0)
    expect(returnMonthIndex(1594, "Jun")).toBe(0)
    expect(returnMonthIndex(1599, "Sep")).toBe(0)
    expect(returnMonthIndex(1598, "Apr")).toBe(0)
    expect(returnMonthIndex(1597, "Jan")).toBe(0)
    expect(returnMonthIndex(1595, "Nov")).toBe(0)
    expect(returnMonthIndex(1597, "Oct")).toBe(0)
  })
  it("should return 1 even is a bissextile year", ()=>{
    expect(returnMonthIndex(1597, "May")).toBe(1)
    expect(returnMonthIndex(1596, "Feb")).toBe(1)
  })
})
