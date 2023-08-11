/****************************************************************************************************************************************************
* Objetivo: Calcular a média de um aluno com base em 4 notas
* Data: 04/08/2023
* Autor: Igor Araujo
* Versão: 1.0
****************************************************************************************************************************************************/

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


//Import da biblioteca de entrada de dados via teclado
var readline = require('readline')

//Cria o elemento de entrada de dados para digitação com usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Qual o seu nome? ', function(nomeAluno){

    let nome = nomeAluno

    entradaDeDados.question('Digite a sua primeira nota: ', function(n1){

        //Convertendo String para Number
        let nota1 = Number(n1, 10)

        entradaDeDados.question('Digite a sua segunda nota: ', function(n2){

            let nota2 = Number(n2, 10)
    
            entradaDeDados.question('Digite a sua terceira nota: ', function(n3){

                let nota3 = Number(n3, 10)
        
                entradaDeDados.question('Digite a sua quarta nota: ', function(n4){

                    let nota4 = Number(n4, 10)

                    // Verificando se todas as notas foram digitadas
                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){

                        console.log('ERRO: É obrigatório informar todas as notas')

                    }else{
                        
                        let media = (nota1 + nota2 + nota3 + nota4)/4

                        //Exibindo a média com apenas uma casa decimal.
                        console.log(`Olá ${nome}, sua média é ${media.toFixed(1)} `)

                    }

                    //Encerra o processamento de entrada de dados
                    entradaDeDados.close()

                })

            })

        })

    })

})