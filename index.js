"use strict";
// let nome: string = "Daniel";
// console.log("Olá, " + nome);
Object.defineProperty(exports, "__esModule", { value: true });
// 1
// function vezes(a: number): number {
//     return a * 2
// }
// let nome: number = 2
// console.log(vezes(nome))
// 2
// function saudacao(a: string): string {
//     return `Olá ${a}`
// }
// let nome: string = `Lohan`
// console.log(saudacao(nome))
// 3
// let nome: string[] = ['Lialvan', 'Loven', 'Logetto', 'Losguerren']
// function boom(a: string[]): void{
//     for(const f of nome) console.log(f);
// }
// boom(nome)
// 4
// let boom: [string, number] = ['Igor', 16]
// console.log(boom)
// 5
var boom;
(function (boom) {
    boom[boom["ACESSO_COMPLETO"] = 0] = "ACESSO_COMPLETO";
    boom[boom["ACESSO_BASICO"] = 1] = "ACESSO_BASICO";
    boom[boom["ACESSO_MINIMO"] = 2] = "ACESSO_MINIMO";
})(boom || (boom = {}));
let ADMIN = boom.ACESSO_COMPLETO;
let USER = boom.ACESSO_BASICO;
let GUEST = boom.ACESSO_MINIMO;
console.log(`ADMIN: ${ADMIN}, USER: ${USER}, GUEST: ${GUEST}`);
