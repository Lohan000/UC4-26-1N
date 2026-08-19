"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    constructor(name, level, health, mana, spell) {
        super(name, level, health);
        this.mana = mana;
        this.spell = spell;
    }
    getterMana() {
        return this.mana;
    }
    getterSpell() {
        return this.spell;
    }
    setterMana(newMana) {
        this.mana = newMana;
    }
    setterSpell(newSpell) {
        this.spell = newSpell;
    }
    castSpell(unknownspell) {
        if (unknownspell == this.spell) {
            if (this.mana > unknownspell.getterManaCost()) {
                console.log(`

${this.name} casts ${unknownspell.getterName()}
Damage: ${unknownspell.getterDamage()}
Mana remaining: ${this.mana}

`);
            }
            else {
                console.log(`${this.name} does not have enough mana!`);
            }
        }
        else {
            console.log('You dont know this magic...');
        }
    }
}
exports.Mage = Mage;
