const input = require("readline-sync");

let dia = parseInt(
  input.question(
    "Digite um número de 1 a 7 para um dia da semana,\nonde 1=segunda e 7=domingo: "
  )
);

switch (dia) {
  case 1:
    console.log("Bora pra festa!");
    break;
  case 2:
    console.log("Hoje é dia de FARRA!");
    break;
  case 3:
    console.log("Já dizia Gandhi: o Nirvana se atinge com vodka!");
    break;
  case 4:
    console.log("Hoje é dia de ver as prima!");
    break;
  case 5:
    console.log("Sextou rapeize!");
    break;
  case 6:
    console.log("Ela me falou que quer Rave, bebida...");
    break;
  case 7:
    console.log("Bicho, eu preciso mudar de vida... :/");
    break;
  default:
    console.log("Erro! Digite um número válido.");
    break;
}
