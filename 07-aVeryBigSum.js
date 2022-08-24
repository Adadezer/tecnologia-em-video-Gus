// Neste exercício vamos aprender como somar todos os elementos de um array, independente do seu tamanho.
// Exercício A Very Big Sum do Hacker Rank.

function aVeryBigSum(ar) {
  // Write your code here
  let result = 0;
  for (let i = 0; i< ar.length; i += 1) {
    result += ar[i];
  }

  return result;
}

function aVeryBigSumReduce(ar) {
  return ar.reduce((acc, curr)=> acc + curr, 0);
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
console.log(aVeryBigSumReduce([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));