"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class TransportShip extends SpaceCraft_1.Spacecraft {
    constructor(id, name, fuel, health, cargoCapacity) {
        super(id, name, fuel, health);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
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
}
exports.TransportShip = TransportShip;
