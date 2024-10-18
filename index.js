//Esta aplicação WEB será desenvolvida com o auxílio da biblioteca/módulo [Express](https://expressjs.com/).
//Express é um framework web para desenvolvimento de aplicações web.
//O framework Express foi desenvolvido com o objetivo de simplificar o desenvolvimento de aplicações web.
//A complexidade de programar o protocolo HTTP é diminuida com a ajuda do framework Express.
//Para não reinventar a roda.... vamos instalar o Express.
//No terminal executar o comando: npm install express
//No formato CommonJS --> const express = require("express");

import express from "express";

const host = "0.0.0.0"; //todas as interfaces de rede do computador
const porta = 3000; //identifica a nossa aplicação como sendo a 3000

const app = express(); //aplicação servidora web que se comunica utilizando o HTTP

function paginaInicial(requisicao, resposta) {
    resposta.send(`<h1>Seja bem vindo!</h1> 
                   <br/> 
                   <h2>Primeiros passos para desenvolvimento de aplicação web com Node/JS</h2>
                   <h3>Página inicial</h3>
        `);
}            //   ----> A função paginaInicial não é chamada, ele é passada como parâmetro
             //   |
app.get("/", paginaInicial);  //http://localhost:3000/ <== é a raiz da aplicação

app.listen(porta, host, () => {    //arrow function ou ainda função de seta
    console.log("Servidor em execução http://" + host + ":" + porta);
});



