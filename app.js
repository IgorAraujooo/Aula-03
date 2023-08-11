/***********************************************************************************************************************************
 * Objetivo: Calcular a média do usuário                                                                                           *
 * Data: 04/08/23                                                                                                                  *
 * Autor: Igor Araujo                                                                                                              *
 * Versão: 1.0                                                                                                                     * 
 ***********************************************************************************************************************************/

/****************************************************************************************************************************************************
* Formas de criar variaveis e constantes
*
* var - permite criar uma variável de escopo global, ou seja, irá existir em todo o projeto
* let - permite criar uma variável de escopo local, ou seja, irá existir apenas naquele bloco
* const - permite criar uma constante, que pode ser de escopo local ou global. Sempre utilizamos em situações onde não haverá mudança de conteúdo
*
* Operadores de Comparação
*
* ==   - Comparação de conteúdo 
* !=   - Diferença
* >    - Maior que
* <    - Menor que
* >=   - Maior ou igual que 
* <=   - Menor ou igual que
* ===  - Comparação de conteúdos e dados iguais
* !==  - Comparação de conteúdos diferentes e dados iguais
* ==!  - Comparação de conteúdos iguais e tipos diferentes
*
* Operadores Lógicos
*
* E       -  AND - &&
* OU      -  0R  - ||
* NEGAÇÃO -  NOT - !
*
****************************************************************************************************************************************************/

// Import da biblioteca de entrada de dados via teclado
var readline = require('readline')

// Criando um objeto entradaDeDados para ser uma referencia da bibliteca READLINE
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



entradaDeDados.question('Digite seu nome: ', function (nomeUsuario) {
    var nome = nomeUsuario

    entradaDeDados.question('Qual a sua primeira nota: ', function (primeiraNota) {
        var nota1 = primeiraNota.replace(',', '.')

        entradaDeDados.question('Qual a sua segunda nota: ', function (segundaNota) {
            var nota2 = segundaNota.replace(',', '.')

            entradaDeDados.question('Qual a sua terceira nota: ', function (terceiraNota) {
                var nota3 = terceiraNota.replace(',', '.')

                entradaDeDados.question('Qual a sua quarta nota: ', function (quartaNota) {
                    var nota4 = quartaNota.replace(',', '.')

                    var number1 = parseInt(nota1)
                    var number2 = parseInt(nota2)
                    var number3 = parseInt(nota3)
                    var number4 = parseInt(nota4)


                    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                        console.log("ERRO: é obrigatorio informar todas as notas")

                        // Validação para entrada de dados não númericos
                        // isNan () - Verifica se a variavel não é um número
                    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {

                        console.log("ERRO: é obrigatorio entrada de dados só com números")


                    } else if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
                        console.log("Informar apenas números entre 0 e 10")

                    } else {
                        var media = (Number(number1) + Number(number2) + Number(number3) + Number(number4)) / 4

                        // Usar parseint para transformar string em int
                        console.log("      ")

                        // toUpperCase é utilizado para devolver o texto escrito em maisculo 
                        console.log('Bem vindo ' + nome.toUpperCase())
                        console.log('Primeira nota: ' + nota1)
                        console.log('Segunda nota: ' + nota2)
                        console.log('Terceira nota: ' + nota3)
                        console.log('Quarta nota: ' + nota4)

                        // toFixed permite ajustar a quantidade de casas decimais 
                        console.log('Sua média é: ' + media.toFixed(1).replace(',', '.'))
                    }




                })
            })
        })
    })
})
