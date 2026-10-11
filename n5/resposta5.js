
function checkCashRegister(price, cash, cid) {
  let change;
  let troco = Math.round((cash - price) * 100);
  let soma = 0;
  let status = "";
  let valores = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];//fiz a logica para reais, com a ajuda da ia, seria mais facil fazer com centavos , e depois mudar para dolares no final, evitando diversos problemas nas divisoes
  

  for (let i = 0; i < cid.length; i++) {
    soma += Math.round(cid[i][1] * 100);
  }

  if (soma === troco) {
    status = "CLOSED";
    change = cid;
  }

  if (soma > troco) {
    status = "OPEN";
  }

  if (soma < troco) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }

  if (status === "OPEN") {
    change = [];

    for (let i = cid.length - 1; i >= 0; i--) {
      let necessarias = Math.floor(troco / valores[i]);
      let disponiveis = Math.floor((cid[i][1] * 100) / valores[i]);//math.floor pega o valor arrendondado pra baixo

      let quantidade = Math.min(necessarias, disponiveis);
      let devolvido = quantidade * valores[i];

      if (quantidade > 0) {
        change.push([cid[i][0], devolvido / 100]);
        troco -= devolvido;
      }
    }

    if (troco > 0) {
      status = "INSUFFICIENT_FUNDS";
      change = [];
      console.log("Troco restante:", troco);
    }
  }

  return {
    status: status,
    change: change
  };
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

