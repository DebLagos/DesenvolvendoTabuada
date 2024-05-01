import express from 'express';// permite criar aplicações web de forma rapida;

const host = '0.0.0.0'; //O ip 0.0.0.0 representa todas as placas de rede do computador que esta executando essa função
const porta = 3000; // identifica o programa dentre tantos os outros progamas que estão em execução no computador que esteja executando essa aplicação;

const app = express();

//requisição vem da internet
//resposta é enviada para internet para quem fez a requisição
function retornaPaginaInicial(requisicao, resposta) {

    resposta.write('<DOCTYPE html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html');
    resposta.end();
};

app.get("/", retornaPaginaInicial);

app.listen(porta, host, () => {
    console.log("Servidor esta executando em http//" + host + ":" + porta);

})