function caesarCipher(string, shift) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"];
  const message = [...string];
  const puncChecker = /\p{P}/gu;
  const spaceChecker = /\s/;
  const decoded = [];

  if (shift < 1 || shift > 25)
    return console.log("Shift factor must be between 1 and 25");

  for (let i = 0; i < message.length; i++) {
    if (puncChecker.test(message[i]) || spaceChecker.test(message[i])) {
      decoded.push(message[i]);
    } else {
      let current = alphabet.indexOf(message[i]);
      let offset = current + shift;
      decoded.push(alphabet[offset]);
    }
  }
  return decoded.join("");
}

module.exports = { caesarCipher };
