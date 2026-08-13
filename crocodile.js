"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodile = void 0;
const Reptil_1 = require("./Reptil");
class Crocodile extends Reptil_1.Reptil {
    constructor(nome, idade, tipoEscama) {
        super(nome, idade, tipoEscama);
    }
    swim() {
        console.log(`${this.nome} está nadando...`);
    }
}
exports.Crocodile = Crocodile;
