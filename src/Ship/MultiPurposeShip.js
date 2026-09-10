"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPurposeShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class MultiPurposeShip extends SpaceCraft_1.Spacecraft {
    constructor(id, name, fuel, health, WeaponPower, cargoCapacity) {
        super(id, name, fuel, health);
        this.WeaponPower = WeaponPower;
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
        this.currentLocation = `Lobby`;
    }
    attack(target) {
        console.log(`${this.Getname()} attacks ${target.Getname()},
${target.Getname} receives ${this.WeaponPower} Damage!`);
        target.takeDamage(this.WeaponPower);
        return this.WeaponPower;
    }
    loadCargo(amount) {
        if (this.currentCargo + amount < this.cargoCapacity) {
            console.log(`It exceeds the maximum load.`);
        }
        else if (amount <= 0) {
            console.log(`Don't exist`);
        }
        else {
            this.currentCargo += amount;
            console.log('The load was successfully placed.');
        }
    }
    unloadCargo(amount) {
        if (this.currentCargo - amount < 0) {
            this.currentCargo = 0;
        }
        else if (amount <= 0) {
            console.log(`Don't exist`);
        }
        else {
            this.currentCargo = -amount;
        }
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
    getCurrentCargo() {
        return this.currentCargo;
    }
    explore(location) {
        if (this.getFuel() - 10 > 0) {
            this.currentLocation = location;
            return `The ship ${this.Getname()} starts exploring ${location}`;
        }
        else {
            return `The ship needs more fuel!`;
        }
    }
    collectData() {
        if (this.currentLocation === `Lobby`) {
            return `You are in the lobby yet, if you wanna gain new Data, then explore!`;
        }
        else {
            return `Data colected...`;
        }
    }
}
exports.MultiPurposeShip = MultiPurposeShip;
