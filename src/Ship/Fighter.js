"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class Fighter extends SpaceCraft_1.Spacecraft {
    constructor(id, name, fuel, health, WeaponPower) {
        super(id, name, fuel, health);
        this.WeaponPower = WeaponPower;
    }
    attack(target) {
        console.log(`${this.Getname()} attacks ${target.Getname()},
${target.Getname} receives ${this.WeaponPower} Damage!`);
        target.takeDamage(this.WeaponPower);
        return this.WeaponPower;
    }
}
exports.Fighter = Fighter;
