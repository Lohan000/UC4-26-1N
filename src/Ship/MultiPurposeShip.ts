import { Spacecraft } from "./SpaceCraft";
import { CombatCapable } from "../Interface/CombatCapable";
import { CargoCarrier } from "../Interface/CargoCarrier";
import { ExplorationShip } from "./ExplorationShip";
export class MultiPurposeShip extends Spacecraft implements CombatCapable, CargoCarrier, ExplorationShip{
    private WeaponPower: number;
    private cargoCapacity: number;
    private currentCargo: number;
    private currentLocation: string;

    public constructor(id: number, name: string, fuel: number, health: number, WeaponPower: number, cargoCapacity: number){
        super(id, name, fuel, health)
        this.WeaponPower = WeaponPower
        this.cargoCapacity = cargoCapacity
        this.currentCargo = 0
        this.currentLocation = `Lobby`
    }
 
    attack(target: Spacecraft): number {
        console.log(`${this.Getname()} attacks ${target.Getname()},
${target.Getname} receives ${this.WeaponPower} Damage!`)
        target.takeDamage(this.WeaponPower)
        return this.WeaponPower
    }

    loadCargo(amount: number): void {
        if(this.currentCargo + amount < this.cargoCapacity){
            console.log(`It exceeds the maximum load.`)
        } else if(amount <= 0){
            console.log(`Don't exist`)
        } else{
            this.currentCargo += amount
            console.log('The load was successfully placed.')
        }
    }

    unloadCargo(amount: number): void {
        if(this.currentCargo - amount < 0){
            this.currentCargo = 0
        } else if (amount <= 0){
            console.log(`Don't exist`)
        } else {
            this.currentCargo =- amount
        }
    }
    
    getCargoCapacity(): number {
        return this.cargoCapacity
    }
    getCurrentCargo(): number {
        return this.currentCargo
    }

    explore(location: string): string {
        if(this.getFuel() - 10 > 0){
            this.currentLocation = location 
        return `The ship ${this.Getname()} starts exploring ${location}` 
        } else { 
            return `The ship needs more fuel!`
            }
        
    }
    collectData(): string {
        if(this.currentLocation === `Lobby`){
            return `You are in the lobby yet, if you wanna gain new Data, then explore!`
        } else {
            return `Data colected...`
        }
    }

}