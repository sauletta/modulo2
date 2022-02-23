const input = require("readline-sync");

// Calculadora de média
console.log("1ª atividade_______________________________");

console.log("\nDigite as notas de 0 a 10.");
let nota1 = input.question("Digite a primeira nota: ");
let nota2 = input.question("Agora a segunda nota: ");
let nota3 = input.question("A terceira nota: ");
let nota4 = input.question("A quarta: ");
let nota5 = input.question("E por fim a quinta: ");

const media =
  (+parseFloat(nota1) +
    +parseFloat(nota2) +
    +parseFloat(nota3) +
    +parseFloat(nota4) +
    +parseFloat(nota5)) /
  5;

console.log("A média do aluno é: " + media);

if (media >= 0 && media < 4) {
  console.log("Aluno reprovado!");
} else if (media >= 4 && media < 7) {
  console.log("Aluno em recuperação!");
} else if (media >= 7 && media <= 10) {
  console.log("Aluno aprovado!");
} else {
  console.log("Média inválida. Alguma nota sucede/precede o intervalo de 0 a 10.");
}

// Contador de letras
console.log("\n2ª atividade_______________________________");

var frase = "A TURMA DO BACKEND DO SENAC, É MASSA!";

console.log(frase);
console.log("Esta frase tem " + frase.length + " caracteres.");

// Inversor de letras
console.log("\n3ª atividade_______________________________");

console.log("A frase ao contrário fica: ");
console.log(frase.split("").reverse().join(""));
