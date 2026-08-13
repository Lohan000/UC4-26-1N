"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
const Animal_1 = require("./Animal");
// Subclasse Mamífero
class Mamifero extends Animal_1.Animal {
    constructor(nome, idade, temPelos) {
        super(nome, idade); // chama o construtor da classe pai
        this.temPelos = temPelos;
    }
    amamentar() {
        console.log(`${this.nome} está amamentando seus filhotes.`);
    }
}
exports.Mamifero = Mamifero;
