// EXERCÍCIO 3
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// -----------------------------------------------------------------------

const loja = (preco, desconto, parcelas) => {
  console.log(`Preço R$: ${preco.toFixed(2).replace('.',',')}`);

  const vista = preco - ((desconto / 100) * preco);
  console.log(`À vista: R$${vista.toFixed(2).replace('.',',')}`);

  console.log(`Ou ${parcelas}x de R$: ${(preco / parcelas).toFixed(2).replace('.',',')}`);
}

loja(60, 10, 3);