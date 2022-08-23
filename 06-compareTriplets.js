// Neste exercício vamos aprender como utilizar a condição IF / ELSE.
// Exercício Compare The Triplets do Hacker Rank.

function compareTriplets(a, b) {
  let pontosAlice = 0;
  let pontosBob = 0;
  let total = [];

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      pontosAlice += 1;
    }else if (a[i] < b[i]){
      pontosBob += 1;
    }
  }

  total.push(pontosAlice, pontosBob);
  return total;
  // ou
  // return [pontosAlice, pontosBob]
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));