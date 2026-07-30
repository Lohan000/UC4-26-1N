"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
class Monster {
    nameParameter;
    typeParameter;
    name;
    type;
    strength;
    life;
    constructor(nameParameter, typeParameter) {
        this.nameParameter = nameParameter;
        this.typeParameter = typeParameter;
        this.name = nameParameter;
        this.type = typeParameter;
        this.strength = 20;
        this.life = 50;
    }
    getName() {
        return this.name;
    }
    setter(newname) {
        this.name = newname;
    }
    getforca() {
        return this.strength;
    }
    setterforca(newforca) {
        this.strength = newforca;
    }
    attack() {
        console.log(`tome seu nojento`);
    }
    defend() {
        console.log(`Defende`);
    }
    dodge() {
        console.log('Esquiva e te mato');
    }
}
exports.Monster = Monster;
