"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorationShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class ExplorationShip extends SpaceCraft_1.Spacecraft {
    constructor(id, name, fuel, health) {
        super(id, name, fuel, health);
        this.currentLocation = `lobby`;
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
        if (this.currentLocation === null) {
            return `You are in the lobby yet, if you wanna gain new Data, then explore!`;
        }
        else {
            return `Data colected...`;
        }
    }
}
exports.ExplorationShip = ExplorationShip;
