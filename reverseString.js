function reverseString(string) {
  let newArr = [...string];
  let reverseArr = [];

  for (let i = newArr.length - 1; i >= 0; i--) {
    reverseArr.push(newArr[i]);
  }

  return reverseArr.join("");
}

module.exports = { reverseString };
