// Exercício de processo seletivo!
// Neste exercício vamos aprender como construir uma escada de base n posicionada na direita utilizando um FOR dentro de outro FOR.
// Exercício Stair Case do Hacker Rank.

function staircase(n) {
  // Write your code here
  const symbol = '#';
  let inputLine = '';
  let inputPosition = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      if (columnIndex < inputPosition) {
        inputLine += ' ';
      } else {
        inputLine += symbol;
      }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
  }
}

staircase(4);