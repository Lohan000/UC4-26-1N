const ask = require('readline-sync');


//npm init -y
//npm install readline-sync

// 1 
// let question = ask.question('Qual é o seu nome?');
// let question1 = Number(ask.question('Qual é a sua idade?'));

// console.log(`Olá ${question}, você tem ${question1} anos.`);

// 2

//let firstnumber1 = Number(ask.question('primerio Número'))
//let secondNumber = Number(ask.question('Segundo Número'))

//console.log(`${firstnumber1} + ${secondNumber} = ${firstnumber1 + secondNumber}`)
//console.log(`${firstnumber1} * ${secondNumber} = ${firstnumber1 * secondNumber}`)
//console.log(`${firstnumber1} - ${secondNumber} = ${firstnumber1 - secondNumber}`)
//console.log(`${firstnumber1} / ${secondNumber} = ${firstnumber1 / secondNumber}`)

// 3

//let number1 = Number(ask.question('Primeira Número'))
//let resultado = number1 >= 7 ? 'Aprovado':'Reprovado';

//console.log(`${resultado}`)

// 4

// let number1 = Number(ask.question('Primeiro Número: '))
// if (number1 %  2 == 0) {
//         console.log('É par');
// } else {
//         console.log('é impar');
// }

// 5

// let result = Number(ask.question('me da o dia da semana que se quer 1-7: '))

// switch (result){
//     case 1:
//         console.log('Domingo')
//         break
//     case 2:
//         console.log('Segunda')
//         break
//     case 3:
//         console.log('Terca')
//         break
//     case 4:
//         console.log('Quarta')
//         break
//     case 5:
//         console.log('Quinta')
//         break
//     case 6:
//         console.log('Sexta')
//         break
//     case 7:
//         console.log('Sabado')
//         break
//     default:
//         console.log('Erro')
//         break
// }
// 6

// let menu = Number(ask.question(`1 - coca-cola
// 2 - Guarana
// 3 - cafe

// SELECIONE SEU PRODUTO PARA VER O PRECO:`))
// function menu1(number){
//     switch (number){
//     case 1:
//         console.log('R$5,00')
//         break
//     case 2:
//         console.log('R$6,00')
//         break
//     case 3:
//         console.log('R$90,00')
//         break
//     default:
//         console.log('Erro')
//         break
//    }
// }
// menu1(menu)
// 7
// function calculateSum(numbers){
//     let soma = 0
//     for(let i = 0; i < numbers.length; i++)
//         soma = soma + numbers[i]
//     console.log(soma)
// }

// let myArray = [7, 6, 4, 22, 13]
// calculateSum(myArray)

// 8
// let i = 0
// while (i < 11){
//     console.log(i)
//     i++;
// }

// 9
// function test3() {
//     frutas = ['Abacaxi', 'manga', 'banana']
//     for(fruta of frutas){
//         console.log(`${fruta}`)
//     }
// }
// test3()

// 10

// function SELECTION() {
//   frutas = ['Abacaxi', 'manga', 'banana']
//   for(let i = 0; i < 3; i++){
//     console.log(`${frutas[i]}`)
//   }
// }
// SELECTION()

//11
// function teste(){
//     const pessoa = {
//     nome:'Lohan',
//     idade:16
//     };
//     for (const chave in pessoa){
//     console.log(`${chave}: ${pessoa[chave]}`);
//   }
  
// }
// teste()

// 12
// function parate20() {
//     for (let i = 0; i < 21; i++){
//         if (i % 2 == 0){
//             console.log(`${i}`)
//         }
//     }
// }

// parate20()

// // 13
// let a = 3
// let b = 2
// function boom(number1, number2){
//   if (number1 > number2){
//     console.log(`${number1} é maior que ${number2}`);
//   } else if (number1 < number2){
//     console.log(`${number1} é menor que ${number2}`);
//   } else {
//     console.log(`${number1} é igual a ${number2}`);
//   }
// }

// boom(a, b)
// 14

// let question = ask.question('Me da um número para ver se é primo: ')

// function calculateSum(numbers){
//     let soma = 0
//     for(let num of numbers){
//         let primo = true
//         if (num <2){
//             primo = false
//         }
//         for(let j = 2; j < num; j++){
//             if(num % j === 0){
//                 primo = false
//             }
//         }
//         if (primo){
//             soma += num
//         }
//     }
//     console.log(soma)
// }

// calculateSum(question)

// 15
// a = ask.question(`Nome:`)
// b = ask.question(`idade: `)

// console.log(`Olá ${a}, voce tem ${b} anos, ne? Seja bem vindo!`)
