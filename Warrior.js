"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
class Warrior {
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
        this.strength = 40;
        this.life = 100;
    }
    //getter
    getName() {
        return this.name;
    }
    //setter
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
exports.Warrior = Warrior;
