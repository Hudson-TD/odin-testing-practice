const { capitalize } = require("../functions/capitalize");

test("First letter returns capitalized", () => {
  expect(capitalize("testing")).toBe("Testing");
});
