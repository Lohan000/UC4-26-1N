"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    constructor(name, level, health, strength, Weapon) {
        super(name, level, health);
        this.strength = strength;
        this.Weapon = Weapon;
    }
    getterStrength() {
        return this.strength;
    }
    setterStrength(newStrength) {
        this.strength = newStrength;
    }
    getterWeapon() {
        return this.Weapon;
    }
    setterWeapon(newWeapon) {
        this.Weapon = newWeapon;
    }
    attack() {
        console.log(` ${this.name} attacks with ${this.Weapon.getterName()}!
Damage: ${this.Weapon.getterDamage() + this.strength}

`);
    }
}
exports.Warrior = Warrior;
