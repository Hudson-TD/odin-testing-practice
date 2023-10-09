const { capitalize } = require("./capitalize");

test("First letter returns capitalized", () => {
  expect(capitalize("testing")).toBe("Testing");
});
