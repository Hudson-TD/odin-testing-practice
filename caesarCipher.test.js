const { caesarCipher } = require("./caesarCipher");

test("Caesar Cipher", () => {
  expect(caesarCipher("this is a super supreme test!", 25)).toBe(
    "sghr hr z rtodq rtoqdld sdrs!"
  );
});
