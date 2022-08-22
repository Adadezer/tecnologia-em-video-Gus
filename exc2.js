// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------


const jantar = (valorJantar, taxa) => { 
  console.log(`Valor do Jantar: R$${valorJantar.toFixed(2).replace('.',',')}`);

  const taxaGarcom = (taxa / 100) * valorJantar;
  console.log(`Taxa do garçom: R$${taxaGarcom.toFixed(2).replace('.',',')}`);
  
  console.log(`Total a pagar: R$${(valorJantar + taxaGarcom).toFixed(2).replace('.',',')}`);
}

jantar(80, 10);