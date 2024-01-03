//Média Normal

const media = (...valores) =>
  valores.reduce((acumulo, num) => acumulo + num) / valores.length;

console.log("Média Normal");
console.log(media(2, 6, 3, 7, 4));

//Média Ponderada

const a = {
  n: 9,
  p: 3,
};
const b = {
  n: 7,
  p: 1,
};
const c = {
  n: 10,
  p: 1,
};

const mediaPonderada = (...valores) => {
  const soma = valores.reduce((acumulo, { n, p }) => acumulo + n * p, 0);
  const somaPesos = valores.reduce((acumulo, { p }) => acumulo + p, 0);

  return soma / somaPesos;
};

console.log("\nMédia Ponderada:");
console.log(mediaPonderada(a, b, c));

//Mediana

const mediana = (...valores) => {
  if (valores.length % 2 === 0) {
    return media(valores[valores.length / 2 - 1], valores[valores.length / 2]);
  }
  return valores[Math.floor(valores.length / 2)];
};

console.log("\nMediana:");
console.log(mediana(2, 4, 5, 7, 42, 99));
console.log(mediana(15, 14, 8, 7, 3));

//Moda

const moda = (...valores) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = valores.map((num) => [
    num,
    valores.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log("\nModa: ");
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
