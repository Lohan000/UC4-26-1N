"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spell = void 0;
class Spell {
    constructor(name, damage, Manacost) {
        this.name = name;
        this.damage = damage;
        this.Manacost = Manacost;
    }
    getterName() {
        return this.name;
    }
    getterDamage() {
        return this.damage;
    }
    getterManaCost() {
        return this.Manacost;
    }
    setterName(newName) {
        this.name = newName;
    }
    setterDamage(newDamage) {
        this.damage = newDamage;
    }
    setterManaCost(newManaCost) {
        this.Manacost = newManaCost;
    }
    showInfo() {
        console.log(`

--------------------
Spell
--------------------
Name: ${this.name}
Damage: ${this.damage}
ManaCost: ${this.Manacost}            

`);
    }
}
exports.Spell = Spell;
