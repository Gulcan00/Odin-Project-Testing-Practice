import analyzeArray from "../scripts/analyzeArray.js";

test("analyzes a mixed number array", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));

test("analyzes an array with decimals", () =>
  expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
    average: 2.5,
    min: 1.5,
    max: 3.5,
    length: 3,
  }));
