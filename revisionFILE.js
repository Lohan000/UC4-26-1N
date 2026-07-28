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


//9


// 10
function SELECTION() {
  frutas = ['Abacaxi', 'manga', 'banana']
  for(let i = 0; i < 4; i++){
    console.log(`${frutas[i}`)
  }
}
//11
function{
const pessoa = {
  nome:'Lohan',
  idade:16
};
for (const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
  }
  
}
// 12
function parate20() {
    for (i = 0; i < 20; i+2){
      console.log(`${i}`)
    }
}
// 13
let a = 1
let b = 2
function (number1, number2){
  if (number1 > number2){
    console.log(`${number1} é maior que ${number2}`);
  } else if (number1 < number2){
    console.log(`${number1} é menor que ${number2}`);
  } else {
    console.log(`${number1} é igual a ${number2}`);
  }
}
// 14






// 15
a = ask.question(`Nome:`)
b = ask.question(`idade: `)

console.log(`Olá ${a}, voce tem ${b} anos, ne? Seja bem vindo!`)
