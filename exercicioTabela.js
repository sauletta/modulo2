/* Este códio é um ctrl+c/ctrl+v de um colega de sala, salve Davidson! */

// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

// Codigo        especificação           preço
//   1           Cahorro Quente          R$ 4.00
//   2           X-Salada                R$ 4.50
//   3           X-Bacon                 R$ 5.00
//   4           Terrada Simples         R$ 2.00
//   5           Refrigerante            R$ 1.50

const input = require("readline-sync");

const tabela = [
  { codigo: "1", especificacao: "Cahorro Quente", preco: "4.00" },
  { codigo: "2", especificacao: "X-Salada", preco: "4.50" },
  { codigo: "3", especificacao: "X-Bacon", preco: "5.00" },
  { codigo: "4", especificacao: "Terrada Simples", preco: "2.00" },
  { codigo: "5", especificacao: "Refrigerante", preco: "1.50" },
];

console.log(
  "Essa é a melhor hora, quando podemos lhe servir, seja bem vindo!!!"
);
console.log("Escolha seu pedido no nosso cardapio virtual!!!");
console.log("=========================================================");
console.log("| Código   |  Especificação               |  Preço      |");
console.log("_________________________________________________________");
console.log("|  1       |  Cahorro Quente              |  R$ 4.00    |");
console.log("_________________________________________________________");
console.log("|  2       |  X-Salada                    |  R$ 4.50    |");
console.log("_________________________________________________________");
console.log("|  3       |  X-Bacon                     |  R$ 5.00    |");
console.log("_________________________________________________________");
console.log("|  4       |  Terrada Simples             |  R$ 2.00    |");
console.log("_________________________________________________________");
console.log("|  5       |  Refrigerante                |  R$ 1.50    |");
console.log("=========================================================");
console.log(
  "Vamos realizar seu pedido. Informe o produto e a quantidade desejada!"
);
let op = new Boolean(false);
let qto = new Boolean(false);
let prodt = 0;
let quant = 0;
let pedido = 0;
let posicao = 1;
let relacaoPedido = [];
let teste = [];

while (op != true) {
  prodt = input.question("Informe o codigo do produto desejado: ");

  if (prodt >= 1 && prodt <= 5) {
    quant = input.question("Informe a quantidade desejada: ");

    while (qto != true) {
      if (quant <= 0 || isNaN(quant)) {
        quant = input.question("Informe a quantidade desejada: ");
      } else {
        posicao = prodt - posicao;
        relacaoPedido.push(
          "Codigo e referencia: " +
            prodt +
            " - " +
            tabela[posicao].especificacao +
            " | Qtd: " +
            quant +
            " | " +
            " R$ " +
            (quant * tabela[posicao].preco).toFixed(2)
        );
        pedido = pedido + quant * tabela[posicao].preco;
        posicao = 1;
        qto = true;
      }
    }
    qto = false;
    const nvpedido = input.question("Mais algum pedido? (S) ou (N)");
    if (
      nvpedido == "S" ||
      nvpedido == "N" ||
      nvpedido == "s" ||
      nvpedido == "n" ||
      !isNaN(nvpedido)
    ) {
      if (nvpedido == "N" || nvpedido == "n") {
        console.log(
          "Ok, obrigado por sua preferencia e aguarde o seu pedido!!!"
        );
        op = true;
      }
    } else {
      console.log("Você digitou uma pedido invalido!!!");
    }
  } else {
    const npedido = input.question(
      "Codigo do produto invalido, deseja realizar um pedido? (S) ou (N)"
    );
    if (npedido != "S" && npedido != "s") {
      console.log("Ok, obrigado por sua preferencia!!!");
      op = true;
    }
  }
}
console.log(relacaoPedido);
console.log("Total do pedido a ser pago: R$ " + pedido.toFixed(2));
console.log("Obrigado e volte sempre!!!");
