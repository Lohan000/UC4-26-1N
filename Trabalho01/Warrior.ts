import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character{
    private strength: number
    private Weapon: Weapon

    public constructor(name: string, level: number, health: number, strength: number, Weapon: Weapon){
        super(name, level, health)
        this.
    }
    
    public attack(): void{
        console.log(` ${this.name} attacks with ${this.Weapon.getterName()}!
Damage: ${this.Weapon.getterDamage()}`)
    }
}