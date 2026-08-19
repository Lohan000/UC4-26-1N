import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character{
    private strength: number
    private Weapon: Weapon

    public constructor(name: string, level: number, health: number, strength: number, Weapon: Weapon){
        super(name, level, health)
        this.strength = strength
        this.Weapon = Weapon
    }

    public getterStrength(): number{
        return this.strength
    }

    public setterStrength(newStrength: number): void{
        this.strength = newStrength
    }

    public getterWeapon(): Weapon{
        return this.Weapon
    }

    public setterWeapon(newWeapon: Weapon): void{
        this.Weapon = newWeapon
    }
    
    public attack(): void{

        console.log(` ${this.name} attacks with ${this.Weapon.getterName()}!
Damage: ${this.Weapon.getterDamage() + this.strength}

`)
    }
}