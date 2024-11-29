const arr = [1, 2, -1, 4, 5, 0, 3, -2];
const nearbynumber = [];
function closestNumberToZero(arr) {
  if (arr === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; i++) {
      if (arr[i] - arr[j] === 0) {
        nearbynumber.push(arr[i]);
      }
    }
  }
  return nearbynumber;
}
const value = closestNumberToZero(arr);
console.log(value);
