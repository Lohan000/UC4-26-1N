"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reptil = void 0;
const Animal_1 = require("./Animal");
// Subclasse Réptil
class Reptil extends Animal_1.Animal {
    constructor(nome, idade, tipoEscama) {
        super(nome, idade);
        this.tipoEscama = tipoEscama;
    }
    botarOvo() {
        console.log(`${this.nome} botou um ovo.`);
    }
}
exports.Reptil = Reptil;
