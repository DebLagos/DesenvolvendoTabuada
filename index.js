import express from 'express';// permite criar aplicações web de forma rapida;

const host = '0.0.0.0'; //O ip 0.0.0.0 representa todas as placas de rede do computador que esta executando essa função
const porta = 3000; // identifica o programa dentre tantos os outros progamas que estão em execução no computador que esteja executando essa aplicação;

const app = express();

//requisição vem da internet
//resposta é enviada para internet para quem fez a requisição

function retornaPaginaInicial(requisicao, resposta) {

    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página inicial</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html');
    resposta.end();
};

function retornaCalculo(requisicao, resposta) {

    let numeroVezes = requisicao.query.numero;
    let numeroTabuada = requisicao.query.tabuada;

    console.log(requisicao.query);

    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Resultado da tabuada</h1>');
    resposta.write('<ul>');

    if (numeroTabuada) {
        for (let i = 0; i <= numeroVezes; i++) {

            let resultado = numeroTabuada * i;
            resposta.write('<li>');
            resposta.write(numeroTabuada + " x " + i + " = " + resultado);
            resposta.write('</li>');
        }
    }
    else {
        resposta.write('<h1>Informe o parametro para calcular a tabuada na url: http://localhost:3000/tabuada?tabuada=3&numero=10</h1>')
    }

    resposta.write('</ul>');
    resposta.write('</body>');
    resposta.write('</html');
    resposta.end();

}

app.get("/", retornaPaginaInicial);
app.get("/tabuada", retornaCalculo);

app.listen(porta, host, () => {
    console.log("Servidor esta executando em http//" + host + ":" + porta);

})