function telephoneCheck(str) {
  if (typeof str !== "string" || str.length === 0) {
    return false;
  }
  if (str[0] === "-" || str[0] === " ") {
  return false;
  }

  let numero = "";
  let abriuParenteses = false;
  let fechouParenteses = false;
  let posicaoAbre = -1;
  let posicaoFecha = -1;

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (c >= "0" && c <= "9") {
      numero += c;
    } else if (c === "(") {
      if (abriuParenteses) return false;
      abriuParenteses = true;
      posicaoAbre = i;
    } else if (c === ")") {
      if (!abriuParenteses || fechouParenteses) return false;
      fechouParenteses = true;
      posicaoFecha = i;
    } else if (c !== " " && c !== "-") {
      return false;
    }
  }

  if (numero.length !== 10 && numero.length !== 11) {
    return false;
  }

  const temCodigoPais = numero.length === 11;

  if (temCodigoPais && numero[0] !== "1") {
    return false;
  }

  const inicioArea = temCodigoPais ? 1 : 0;//inicioArea recebe 1, ou seja acessa o primeiro indice se verdadeiro, e 0 se for falso, acessa o indice 0

  if (numero[inicioArea] < "2" || numero[inicioArea] > "9") {
    return false;
  }

  if (abriuParenteses !== fechouParenteses) {
    return false;
  }

  if (abriuParenteses) {
    if (posicaoFecha - posicaoAbre !== 4) {
      return false;
    }

    for (let i = posicaoAbre + 1; i < posicaoFecha; i++) {
      if (str[i] < "0" || str[i] > "9") {
        return false;
      }
    }
  }

  if (
    str.includes("  ") ||
    str.includes("--") ||
    str.includes("- ") ||
    str.includes(" -")
  ) {
    return false;
  }

  if (str[str.length - 1] === " " || str[str.length - 1] === "-") {// se o indice 0 for essas coisas, é false
    return false;
  }

  // Verifica a quantidade de dígitos entre os separadores.
  let grupo = 0;
  let grupos = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {// se for 0 e 9 adiciona ao grupo.
      grupo++;
    } else if (str[i] === " " || str[i] === "-") {//se nao for numero adiciona grupo a grupos 
      if (grupo > 0) {
        grupos.push(grupo);//coloca grupo na array grupos
        grupo = 0;
      }
    }
  }

  if (grupo > 0) {
    grupos.push(grupo);
  }

  // Rejeita grupos pequenos demais no número sem parênteses.
  if (!abriuParenteses) {
    let inicio = temCodigoPais ? 1 : 0;

    if (grupos.length > 1) {
      if (temCodigoPais && grupos[0] === 1) {
        grupos.shift();//remove o 1 para verificaçao, como tem codigo pais shift remove o 1.
      }

      if (
        grupos.length !== 3 ||
        grupos[0] !== 3 ||
        grupos[1] !== 3 ||
        grupos[2] !== 4
      ) {
        return false;
      }
    }
  }

  return true;
}
/*obs : nos ultimos dois codigos, por conta do tempo, e das dificuldades , usei bastante a ajuda da ia
pedindo a ela exercicios e me mostrar como resolver os testes que pediam, por exemplo quando algo dava errado no codigo
alem de me ajudar a achar coisa novas como o ? 1:0 que seria um "if e else menor"*/