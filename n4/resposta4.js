const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//verificação de numero telefonico
function DDD(numero){
    let ddds = {
        "11": "São Paulo - SP", 
        "21": "Rio de Janeiro-Rj",
        "62": "Goiania - GO", 
        "61": "Brasilia"
    }
     let ddd = numero.slice(0,2);
     let cidade = ddds[ddd];
    if( cidade!= undefined){
        if(Number.lenght == 9){
        console.log(cidade);
        }
        else{
            console.log("seu numero tem mais ou menos que 9 digitos");
        }
    }
    else{
        console.log("nao foi achado esse ddd", numero);
    }

}

entrada.question("Qual é o seu número?",
        function(numero){
            DDD(numero);
            entrada.close();
        }
)
