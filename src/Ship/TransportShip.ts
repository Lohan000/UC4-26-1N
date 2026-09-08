import { CargoCarrier } from "../Interface/CargoCarrier";
import { Spacecraft } from "./SpaceCraft";

export class TransportShip extends Spacecraft implements CargoCarrier{
    private cargoCapacity: number;
    private currentCargo: number;

    public constructor(id: number, name: string, fuel: number, health: number, cargoCapacity: number){
        super(id, name, fuel, health)
        this.cargoCapacity = cargoCapacity
        this.currentCargo = 0
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
    
}