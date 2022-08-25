function diagonalDifferenceGeneric(arr) {
  // Write your code here
  let diagEsq = 0;
  let diagDir = 0;

  for (let i = 0; i < arr.length; i += 1) {
    diagEsq += arr[i][i];
    diagDir += arr[i][arr.length -1 - i]
  }

  return Math.abs(diagEsq - diagDir); // pede o valor absoluto (somente positivos)
}

console.log(diagonalDifferenceGeneric(
  [
    [1,2,3],
    [4,5,6],
    [9,8,9]
  ]
));

function diagonalDifferenceHardCode(arr) {
  let diagEsq = 0;
  let diagDir = 0;

  diagEsq = arr[0][0] + arr[1][1] + arr[2][2];
  diagDir = arr[0][2] + arr[1][1] + arr[2][0];

  return (diagEsq - diagDir) * -1;
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]));
