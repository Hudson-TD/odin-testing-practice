const { reverseString } = require("../functions/reverseString");

test("Reversing string", () => {
  expect(reverseString("balloon")).toBe("noollab");
});
