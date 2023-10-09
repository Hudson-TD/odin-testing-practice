function capitalize(string) {
  let newArr = [...string];
  newArr[0] = newArr[0].toUpperCase();
  return newArr.join("");
}

module.exports = { capitalize };
