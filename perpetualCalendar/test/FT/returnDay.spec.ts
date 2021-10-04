// internals requirements
import { displayDayName} from "../../src/index"

it("returnDay suite", ()=>{
  expect(displayDayName(4, "Oct", 2021)).toBe("Monday");
})
