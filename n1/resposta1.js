const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function palindromoounao(palavra){
    let palavraoaocontrario = "";
        for (let i = palavra.length - 1; i>=0; i--){
            palavraoaocontrario += palavra[i];
        }
    if(palavraoaocontrario === palavra){
        console.log("verdadeira,e um palindromo");
    }
    else{
        console.log("nao e palindromo");
    }
}

rl.question("Digite uma palavra: ", 
    function(palavra){
    palindromoounao(palavra);

    rl.close();
    }
);  


