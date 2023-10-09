const { caesarCipher } = require("./caesarCipher");

test("Caesar Cipher", () => {
  expect(caesarCipher("zzzzzzzzz", 25)).toBe("yyyyyyyyy");
});
