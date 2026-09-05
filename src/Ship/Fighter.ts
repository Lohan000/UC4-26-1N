import { Spacecraft } from "./SpaceCraft";
import { CombatCapable } from "../Interface/CombatCapable";

class Fighter extends Spacecraft implements CombatCapable {
    private WeaponPower: number

    constructor(id: number, name: string, fuel: number, health: number, WeaponPower: number){
        super(id, name, fuel, health)
        this.WeaponPower = WeaponPower
    }
    attack(target: Spacecraft): number {
        console.log(`${this.Getname()} attacks ${target.Getname()},
`)
        target.takeDamage(this.WeaponPower)
        console.log(``)
        return this.WeaponPower
    }
    
}