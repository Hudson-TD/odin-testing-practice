const { analyzeArray } = require("./analyzeArray");

test("Analyze Array One", () => {
  expect(
    analyzeArray([1, 2, 5, 7, 8, 11, 15, 19, 27, 33, 45, 57])
  ).toStrictEqual({
    average: 19.17,
    min: 1,
    max: 57,
    length: 12,
  });
});

test("Analyze Array Two", () => {
  expect(analyzeArray([-2, 14, 3, 11, 7, 24, 19, 5, 3, 12])).toStrictEqual({
    average: 9.6,
    min: -2,
    max: 24,
    length: 10,
  });
});
