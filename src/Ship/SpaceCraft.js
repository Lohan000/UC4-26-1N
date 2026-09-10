"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacecraft = void 0;
class Spacecraft {
    constructor(id, name, fuel, health) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
        this.health = health;
    }
    getId() {
        return this.id;
    }
    Getname() {
        return this.name;
    }
    getFuel() {
        return this.fuel;
    }
    getHealth() {
        return this.health;
    }
    refuel() {
        this.fuel += 100;
    }
    takeDamage(damage) {
        if (this.health - damage < 0) {
            this.health = 0;
            console.log("the Spaceshift is no longer operational");
        }
        else {
            this.health -= damage;
        }
    }
    repair() {
        this.health = 100;
    }
    isOperational() {
        return this.health > 0;
    }
}
exports.Spacecraft = Spacecraft;
