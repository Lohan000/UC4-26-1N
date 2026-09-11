import { Spacecraft } from "./SpaceCraft";
import { CombatCapable } from "../Interface/CombatCapable";

export class Fighter extends Spacecraft implements CombatCapable {
    private WeaponPower: number

    constructor(id: number, name: string, fuel: number, health: number, WeaponPower: number) {
        super(id, name, fuel, health)
        this.WeaponPower = WeaponPower
    }
    attack(target: Spacecraft): number {
        console.log(`${this.Getname()} attacks ${target.Getname()},
${target.Getname} receives ${this.WeaponPower} Damage!`)
        target.takeDamage(this.WeaponPower)
        return this.WeaponPower
    }

    public getId(): number{
        return this.getId()
    }

    public Getname(): string{
        return this.Getname()
    }

    public getFuel(): number{
        return this.getFuel()
    }

    public getHealth(): number{
        return this.getHealth()
    }

    public refuel(): void{
        this.refuel()
    }

    public takeDamage(damage:number): void{
        this.takeDamage(damage)
    }

    public repair(): void{
        this.repair()
    }

    public isOperational(): boolean{
        return this.isOperational()
    }

}