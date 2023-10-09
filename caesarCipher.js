function caesarCipher(string, shift) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"];
  const message = [...string];
  const decoded = [];

  if (shift < 1 || shift > 25)
    return console.log("Shift factor must be between 1 and 25");

  for (let i = 0; i < message.length; i++) {
    let current = alphabet.indexOf(message[i]);
    let offset = current + shift;
    decoded.push(alphabet[offset]);
  }
  return decoded.join("");
}

module.exports = { caesarCipher };
