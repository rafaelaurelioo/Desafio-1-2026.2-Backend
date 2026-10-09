const readline = require('readline');
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//progama para algarismos romanos
function algarismos_romanos(numero){
    let resultado = ""
    let romanos = [{ valor: 1000 , simbolo: "M"},
                    {valor: 900 , simbolo: "CM"},
                    {valor: 500 , simbolo: "D"},
                    {valor: 400 , simbolo: "CD"},
                    {valor: 100 , simbolo: "C"},
                    {valor: 90 , simbolo: "XC"},
                    {valor: 50 , simbolo: "L"},
                    {valor: 40 , simbolo: "XL"},
                    {valor: 10 , simbolo: "X"},
                    {valor: 9 , simbolo: "IX"},
                    {valor: 5 , simbolo: "V"},
                    {valor: 1 , simbolo: "I"},
                    //casos especiais = 900,400,90,40,9
    ]
    for(let i = 0; i < romanos.length;i++){
        let valor = romanos[i].valor; //cria uma variavel para os valores da array
        let simbolo = romanos[i].simbolo;//mesma coisa do de cima mas para os simbolos
        let quantidade = Math.floor(numero/valor);//o comando Math.floor pega a divisao e tira os decimais
        resultado+= simbolo.repeat(quantidade);//vai colocando a quantidade por exemplo 20 vai repetir o x duas vezes
        numero = numero % valor;//vai divindindo o numero pelos valores 
    }
    console.log(resultado);
}

entrada.question("Digite um numero: ",
    function(numero){
        algarismos_romanos(numero);

        entrada.close();
    }
)