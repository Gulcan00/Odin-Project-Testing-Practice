export default function analyzeArray(arr) {
  const results = arr.reduce(
    (obj, num) => {
      obj.sum += num;
      if (num > obj.max) {
        obj.max = num;
      }

      if (num < obj.min) {
        obj.min = num;
      }
      return obj;
    },
    { sum: 0, max: arr[0], min: arr[0] }
  );

  results.length = arr.length;
  results.average = results.sum / results.length;
  delete results.sum;
  return results;
}
