// RESUMO 
// var, function, console.log, querySelector, prompt()

// variavel permite que a gente guarde um valor para utilizá-lo depois
// função permite que a gente repita e/ou defina um comportamento para aquele trecho de código
// alt+z quebra a linha de comentário sem quebrar o comentário

//console.log imprime as informações no console
// alert() imprime as informações no navegador
// documento.querySelector.textContent | input imprime a informação no HTML

// Entrada de dados
// Funções, prompt, input
// prompt -> navegador, gera uma caixinha de texto
// input  -> HTML e a gente pode recuperar o texto de lá.

// algoritmo -> conjunto de instruções básicas - e várias instruções básicas juntas tornam um algoritmo complexo. São instruções que definem o passo a passo de uma ação.

// console.log("testando")

// CALCULADORA
// Objetivo: calcular o valor da hora de um freelancer

// Etapas da calculadora
// * validar entradas
// * receber um dado
// * calcular um dado
// * retornar um resultado
// * imprimir um resultado
// * limitar o valor em 24 horas

// Operadores matemáticos
// * -> multiplicação
// - -> subtração
// / -> divisão
// + -> adição


//ganho no mês
// var salarioMes = prompt("insira o quanto você ganha por mês")
// console.log(salarioMes)

//calcular o valor por hora
// var HoraDias = prompt("Quantas horas você trabalha por dia?")
// console.log(HoraDias)

//dias trabalhados
// var diasTrabalhados = 22

//calculando a quantidade de horas trabalhadas
// var horasTotaisTrabalhadas =  diasTrabalhados * HoraDias
// console.log(horasTotaisTrabalhadas)

// calculando o valor de cada hora trabalhada
// var valorHora = salarioMes / horasTotaisTrabalhadas
// console.log(valorHora)

//  ----- COMEÇA AQUI A FASE 2 DA RESOLUÇÃO -----

// do documento eu seleciono o id do ganho do mês, inspecionando o documento
var salarioMesEntrada = document.querySelector("#ganho-mes")
console.log(salarioMesEntrada)

var HorasDiaEntrada = document.querySelector("#horas-dia")
console.log(HorasDiaEntrada)

//BOTÃO DE CALCULAR
function calcularValorHora(){
    console.log ("função está funcionando")
    console.log ("testando")

//do SalarioMesEntrada pego o valor
var salarioMes = salarioMesEntrada.value
console.log("salario por mês:", salarioMes)

// da horasDiaEntrada eu pego o valor
var HoraDias = HorasDiaEntrada.value
console.log(HoraDias)

    //ganho no mês
    // var salarioMes = prompt("insira o quanto você ganha por mês")
    // console.log(salarioMes)

    // calcular o valor por hora
    // var HoraDias = prompt("Quantas horas você trabalha por dia?")
    // console.log(HoraDias)

    // esse código, acima, foi o que abriu as caixinhas para inserção de dado. Depois, substituímos o prompt pelo value

//dias trabalhados
var diasTrabalhados = 22

//calculando a quantidade de horas trabalhadas
var horasTotaisTrabalhadas =  diasTrabalhados * HoraDias
console.log(horasTotaisTrabalhadas)

// calculando o valor de cada hora trabalhada
var valorHora = salarioMes / horasTotaisTrabalhadas
console.log(valorHora)

//RESPOSTA FINAL
// do documento HTML, seleciono o id #resposta

var resultado = document.querySelector("#resposta")
console.log

resultado.textContent = valorHora
console.log

resultado.textContent = "R$" + " " + valorHora.toFixed(2)

}