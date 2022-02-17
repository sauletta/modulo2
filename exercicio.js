const input = require("readline-sync");


// Calculando média das notas
console.log("1 atividade_______________________________");

console.log("\nDigite as notas de 0 a 10.");
let nota1 = input.question("Digite a primeira nota: ");
let nota2 = input.question("Agora a segunda nota: ");
let nota3 = input.question("A terceira nota: ");
let nota4 = input.question("A quarta: ");
let nota5 = input.question("E por fim a quinta: ");

console.log(
  "A média do aluno é: " +
    (+parseFloat(nota1) +
      +parseFloat(nota2) +
      +parseFloat(nota3) +
      +parseFloat(nota4) +
      +parseFloat(nota5)) /
      5
);


// Contador de letras
console.log("\n2 atividade_______________________________");

var frase = "A TURMA DO BACKEND DO SENAC, É MASSA!";

console.log(frase);
console.log("Esta frase tem " + frase.length + " caracteres.");


// Invertendo as letras
console.log("\n3 atividade_______________________________");

console.log("A frase ao contrário fica: ");
console.log(frase.split("").reverse().join(""));
