// Internal requirements
import { isBissextile } from '../../src/functions';

describe("isBissextile suite", ()=>{
  it("should return true if year is bissextile otherwise false",()=>{
    expect(isBissextile(2000)).toBe(true);
    expect(isBissextile(1996)).toBe(true);
    expect(isBissextile(1997)).toBe(false);
  })
})
