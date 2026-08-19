"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monster = void 0;
class monster {
    constructor(name, level, health, damage) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.damage = damage;
    }
    getterName() {
        return this.name;
    }
    setterName(newName) {
        this.name = newName;
    }
    getterLevel() {
        return this.level;
    }
    setterLevel(newLevel) {
        this.level = newLevel;
    }
    getterHealth() {
        return this.health;
    }
    setterHealth(newHealth) {
        this.health = newHealth;
    }
    getterDamage() {
        return this.damage;
    }
    setterDamage(newDamage) {
        this.damage = newDamage;
    }
    showInfo() {
        console.log(`
########################
Monster
########################
Name: ${this.name}
Level: ${this.level}
Health: ${this.health}
Damage: ${this.damage}
`);
    }
    attack(character) {
        console.log(`

${this.name} attacks ${character.getterName()}`);
    }
    TakeDamage(amount) {
        if (this.health > amount) {
            console.log(`${this.name} takes ${amount} Damage`);
            this.health -= amount;
        }
        else {
            console.log(`${this.name} takes ${amount} Damage`);
            this.health = 0;
            console.log('O monstro morreu...');
        }
    }
}
exports.monster = monster;
