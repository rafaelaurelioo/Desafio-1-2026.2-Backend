//codigo de caeser
const readline = require('readline');
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    function caesar(Texto,deslocamento){
        let resultado ="";
        for(let i = 0; i<=Texto.length; i++){
            let codigo = Texto.charCodeAt(i);//char code pega letras do alfabeto e começa a partir de 65 por isso tera logicas relacionado a isso
            let posicao = codigo - 65;
            let NovaPosicao = (posicao + deslocamento) % 26;
            let novoCodigo = NovaPosicao + 65;
            let novaLetra = String.fromCharCode(novoCodigo);//pega o novo codigo e transforma em letra
            resultado += novaLetra;
            //basicamente percore por cada letra da palavra/mensagem e transforma no deslocamento
        }
        return resultado;
    }

entrada.question("Qual o a mensagem/palavra?",
        function(Texto){
            entrada.question("qual o deslocamento?",
                function(deslocamento){
                    deslocamento = Number(deslocamento);
                    let resultado = caesar(Texto,deslocamento);
                    console.log("Mensagem cifrada:",resultado);
                    entrada.close();
                })

        }
    )