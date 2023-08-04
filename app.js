/***********************************************************************************************************************************
 * Objetivo: Calcular a média do usuário                                                                                                        *
 * Data: 04/08/23                                                                                                                  *
 * Autor: Igor                                                                                                                *
 * Versão: 1.0                                                                                                                     * 
 ***********************************************************************************************************************************/

// Import da biblioteca de entrada de dados via teclado
var readline = require('readline')

// Criando um objeto entradaDeDados para ser uma referencia da bibliteca READLINE
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



entradaDeDados.question('Digite seu nome: ', function (nomeUsuario) {
    var nome = nomeUsuario

    entradaDeDados.question('A sua primeira nota é: ', function (primeiraNota) {
        var nota1 = primeiraNota

        entradaDeDados.question('A sua segunda nota é: ', function (segundaNota) {
            var nota2 = segundaNota

            entradaDeDados.question('A sua terceira nota é: ', function (terceiraNota) {
                var nota3 = terceiraNota

                entradaDeDados.question('A sua quarta nota é: ', function (quartaNota) {
                    var nota4 = quartaNota

                    // Usar parseint para transformar string em int
                    var number1 = parseInt(nota1)
                    var number2 = parseInt(nota2)
                    var number3 = parseInt(nota3)
                    var number4 = parseInt(nota4)

                    var media = (number1 + number2 + number3 + number4) / 4



                    console.log("      ")
                    console.log('Bem vindo,  ' + nome)
                    console.log('Nota 1: ' + nota1)
                    console.log('Nota 2: ' + nota2)
                    console.log('Nota 3: ' + nota3)
                    console.log('Nota 4: ' + nota4)
                    console.log('Sua média é: ' + media)
                })
            })
        })
    })
})