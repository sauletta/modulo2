const input = require("readline-sync");

// console.log("Saudações caro(a) viajante! Mas antes de começar...");
console.log("Opa sobrinho! Tá grande em moleque. Diz aí pro tio...");

const idade = input.question("Tu tem quantos anos mesmo? ");

// if (idade >= 15 && idade < 20) {
//   console.log("Empunhe sua espada, vamos treinar!");
// } else if (idade >= 20) {
//   console.log("Espero que saiba lutar, partiremos amanhã.");
// } else {
//   console.log(
//     "Acho que você deveria amadurecer um pouco mais, meu(minha) caro(a)."
//   );
// }

if (idade >= 16 && idade < 19) {
  console.log("Ja decidiu o que vai fazer da vida?");
} else if (idade >= 19) {
  console.log("Já ta na hora de criar vergonha nessa cara em.");
} else if (idade > 12 && idade < 15) {
  console.log("E as menininhas em? heheheh.");
} else {
  console.log("Meu fi quer uma prata, quer?");
}
