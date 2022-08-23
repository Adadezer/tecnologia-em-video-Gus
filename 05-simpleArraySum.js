// Neste exercício vamos aprender como utilizar o laço de repetição FOR e trabalhar com [arrays].
// Exercício Simple Array Sum do Hacker Hank.

function simpleArraySum(ar) {
  let soma = 0;

  for (let i = 0; i < ar.length; i += 1) {
    soma += ar[i];
  }

  return soma;
}

function arraySumReduce(ar) {
  return ar.reduce((acc, curr) => acc + curr, 0);
}

console.log(simpleArraySum([1,2,3,4,10,11]));

console.log(arraySumReduce([1,2,3,4,10,11]));