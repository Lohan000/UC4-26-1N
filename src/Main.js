"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExplorationShip_1 = require("./Ship/ExplorationShip");
const Fighter_1 = require("./Ship/Fighter");
const MultiPurposeShip_1 = require("./Ship/MultiPurposeShip");
const TransportShip_1 = require("./Ship/TransportShip");
function startCombat(ship, target) {
    ship.attack(target);
}
function transportCargo(ship, amount) {
    ship.loadCargo(amount);
}
function performExploration(ship, location) {
    if (typeof ship.explore === "function") {
        ship.explore(location);
        ship.collectData();
    }
    else {
        console.log(`This ship cannot explore...`);
    }
}
const fighter1 = new Fighter_1.Fighter(1, `Logetto`, 100, 50, 10);
const transportShip1 = new TransportShip_1.TransportShip(2, `Loven`, 100, 50, 10);
const explorationShip1 = new ExplorationShip_1.ExplorationShip(3, `Lialvan`, 100, 100);
const multiPurposeShip1 = new MultiPurposeShip_1.MultiPurposeShip(4, `Lohan`, 100, 100, 10, 10);
// fighter1.attack(multiPurposeShip1)
// multiPurposeShip1.attack(fighter1)
// performExploration(explorationShip1, `Mars`)
// performExploration(multiPurposeShip1, `Jupiter`)
performExploration(Fighter_1.Fighter, 'Mars');
