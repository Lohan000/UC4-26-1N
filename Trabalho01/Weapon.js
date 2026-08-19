"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    getterName() {
        return this.name;
    }
    getterDamage() {
        return this.damage;
    }
    setterName(newName) {
        this.name = newName;
    }
    setterDamage(newDamage) {
        this.damage = newDamage;
    }
    showInfo() {
        console.log(`

----------------
Weapon            
----------------
Name: ${this.name}
Damage: ${this.damage}

`);
    }
}
exports.Weapon = Weapon;
