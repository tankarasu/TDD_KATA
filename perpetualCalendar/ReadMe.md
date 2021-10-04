# Perpetual Calendar

to Run the test:
```bash
$ npm run test
```
 
> we try to make a perpetual calendar with TDD pattern. You can search on internet for more information about perpetual calender's algorithme, i assume you will do this and we start to implement functions compose it.

## 1. returnYearIndex()

> i will try to test expected behavior of this function.

> If i pass the year as a parameter, we expect an index in return value. The last to numbers of the year must return a value. For example 2000 => 00 => return 0. 
> We will move by baby-steps.

```ts
// ./test/index.spec.ts
import {returnYearIndex} from "../src/index"

describe("returnYearIndex test suite",()=>{
    it("should return 0 when parameters is 2000", () => {
        expect(returnYearIndex(2000)).toBe(0);
    });
})
```

```ts
// ./src/index.ts
export function returnYearIndex(year: number): number {
    return 0;
}
```
> if we pass 2006 , 2017, 2023, 2028, ... it must return 0 too.  
> First we can use %100 , then we handle the last two nummbers, then we can use a switch case for example.

The process will be similarly same with the other functions. At the end the test suite will be an handbook or a documentation.
