const { calculator } = require("./calculator");

test("Addition", () => {
  expect(calculator.add(12, 6)).toBe(18);
});

test("Subtraction", () => {
  expect(calculator.subtract(2, 6)).toBe(-4);
});

test("Division", () => {
  expect(calculator.divide(12, 6)).toBe(2);
});

test("Multiplication", () => {
  expect(calculator.multiply(100, 4)).toBe(400);
});
