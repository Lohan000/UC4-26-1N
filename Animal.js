"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// Classe base (superclasse)
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mover() {
        console.log(`${this.nome} está se movendo...`);
    }
}
exports.Animal = Animal;
