function analyzeArray(arr) {
  let length = arr.length;
  let sum = arr.reduce((prev, current) => {
    return prev + current;
  });
  let average = (sum / length).toFixed(2);
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return {
    average: Number(average),
    min: Number(min),
    max: Number(max),
    length: Number(length),
  };
}

analyzeArray([1, 3, 4, 6, 8, 11, 23, 29]);

module.exports = { analyzeArray };
