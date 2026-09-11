import { Spacecraft } from "./SpaceCraft";
import { CombatCapable } from "../Interface/CombatCapable";
import { CargoCarrier } from "../Interface/CargoCarrier";
import { ExplorationShip } from "./ExplorationShip";
export class MultiPurposeShip extends Spacecraft implements CombatCapable, CargoCarrier, ExplorationShip{
    private Laserlevel: number;
    private Energy: number;
    private cargoCapacity: number;
    private currentCargo: number;
    private currentLocation: string;

    public constructor(id: number, name: string, fuel: number, health: number, Laserlevel: number,Energy: number, cargoCapacity: number){
        super(id, name, fuel, health)
        this.Laserlevel = Laserlevel
        this.Energy = Energy
        this.cargoCapacity = cargoCapacity
        this.currentCargo = 0
        this.currentLocation = `Lobby`
    }
 
    attack(target: Spacecraft): number {
        if(this.getHealth() > 0 ){
            console.log(`${this.Getname()} attacks ${target.Getname()}!`)
        if(this.Energy - this.Laserlevel > 0){
            target.takeDamage(this.Laserlevel)
            console.log(`${target.Getname} receives ${this.Laserlevel} Damage!`)
            return this.Laserlevel
        } else {
            console.log(`your don't have enough energy`)
            this.Laserlevel = 0
        }
        } else {
            console.log('Bro your ship is destroyed buddy... Repair please...')
            return 0
        }
        
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