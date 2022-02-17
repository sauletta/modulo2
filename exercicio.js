const input = require("readline-sync");

// Calculando média das notas

console.log("Digite as notas de 0 a 10.");
const nota1 = input.question("Digite a primeira nota: ");
const nota2 = input.question("Agora a segunda nota: ");
const nota3 = input.question("A terceira nota: ");
const nota4 = input.question("A quarta: ");
const nota5 = input.question("E por fim a quinta: ");

parseFloat(nota1);
parseFloat(nota2);
parseFloat(nota3);
parseFloat(nota4);
parseFloat(nota5);
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

console.log("A média do aluno é: " + media);

// Contador de letras

var frase = "A TURMA DO BACKEND DO SENAC, É MASSA!";

console.log(frase.length);

// Invertendo as letras

function stringReversa(frase) {
    var splitString = frase.split(""); 
    var reverseArray = frase.reverse(); 
    var joinArray = frase.join(""); 
    return joinArray; 
}

console.log(stringReversa);