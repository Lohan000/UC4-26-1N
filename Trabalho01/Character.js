"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, level, health) {
        this.name = name;
        this.level = level;
        this.health = health;
    }
    getterName() {
        return this.name;
    }
    getterLevel() {
        return this.level;
    }
    getterHealth() {
        return this.health;
    }
    setterName(newName) {
        this.name = newName;
    }
    setterHealth(newhealth) {
        this.health = newhealth;
    }
    setterLevel(newLevel) {
        this.level = newLevel;
    }
    showInfo() {
        console.log(`
-------------------
Character:
-------------------
Name: ${this.name}
HP: ${this.health}
LEVEL: ${this.level}`);
    }
    TakeDamage(amount) {
        if (this.health > amount) {
            console.log(`${this.name} takes ${amount} Damage`);
            this.health -= amount;
        }
        else {
            console.log(`${this.name} takes ${amount} Damage`);
            this.health = 0;
            console.log('Seu Personagem morreu');
        }
    }
}
exports.Character = Character;
