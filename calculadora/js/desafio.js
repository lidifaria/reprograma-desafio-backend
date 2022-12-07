// DESAFIO
// Objetivo: calcular valor total de um projeto

// CALCULADORA DE PROJETO - PASSO A PASSO
// 1- receber o input do usuário com valor da hora
// 2- receber o input do usuário com a quantidade de horas do projeto
// 3- apertar o botão para calcular o valor total do projeto
// 4- calcular valor total do projeto
// 5- imprimir o valor total do projeto


// ---> INÍCIO DO CÓDIGO

var ValorPorHora = document.querySelector("#valor-hora")
var HorasDeProjeto = document.querySelector("#horas-projeto")
var resultado = document.querySelector("#resposta")

function calcular(){

resultado.textContent = "R$ " +  (ValorPorHora.value * HorasDeProjeto.value)

}


