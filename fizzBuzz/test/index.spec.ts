const {fizzBuzz} = require("../src/index");

describe("Fizz Buzz suite", ()=>{
  test(`
    Given a number NOT divisible by 3 or 5,
    When I call fizzBuzz
    THEN it returns the given number
    `,
  ()=>{
    expect(fizzBuzz(1)).toBe(1)
  })

  test(`
    Given a number divisible by 3,
    When I call fizzBuzz
    THEN it returns the string "Fizz"
    `,
  ()=>{
    expect(fizzBuzz(3)).toBe('Fizz')
    expect(fizzBuzz(9)).toBe('Fizz')
  })

  test(`
    Given a number divisible by 5,
    When I call fizzBuzz
    THEN it returns the string "Buzz"
    `,
  ()=>{
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(35)).toBe('Buzz')
  })

  test(`
    Given a number divisible by 3 AND 5,
    When I call fizzBuzz
    THEN it returns the string "FizzBuzz"
    `,
  ()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    expect(fizzBuzz(45)).toBe('FizzBuzz')
  })
})
