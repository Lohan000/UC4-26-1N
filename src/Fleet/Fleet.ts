import { CombatCapable } from "../Interface/CombatCapable";
import { Exploratory } from "../Interface/Exploratory";
import { CargoCarrier } from "../Interface/CargoCarrier";
import { Spacecraft } from "../Ship/SpaceCraft";
import { TransportShip } from "../Ship/TransportShip";

export class Fleet {    
    private SpaceCraft: Spacecraft[] = [];
    // private combatShips: CombatCapable[] = [];
    // private ExploreShips: Exploratory[] = [];
    // private TransportShips: CargoCarrier[] = [];
    
    constructor(SpaceCraft: Spacecraft[], combatShips: CombatCapable[] = [], ExploreShips: Exploratory[] = [], TransportShips: CargoCarrier[] = []){
        this.SpaceCraft = SpaceCraft
        this.combatShips =combatShips
        this.ExploreShips = ExploreShips
        this.TransportShips = TransportShips
    }
    
    // public getCombatShips(): CombatCapable[]{
    //     return this.combatShips
    // }

    // public getCargoShips(): CargoCarrier[]{
    //     return this.TransportShips
    // }

    // public getExplorationShips(): Exploratory[]{
    //     return this.ExploreShips
    // }

    public addShip(ship: Spacecraft): void{
        this.SpaceCraft.push(ship) 
    }   

    // public addCombatCapable(ship: CombatCapable): void{
    //     this.combatShips.push(ship)
    // }

    // public addExploreShips(ship: Exploratory): void{
    //     this.ExploreShips.push(ship) 
    // }   

    // public addTransportShips(ship: CargoCarrier): void{
    //     this.TransportShips.push(ship) 
    // }   

    public removeShip(id: number): void{
        for(let i = 0; i < this.SpaceCraft.length; i++){
            if(this.SpaceCraft[i].getId() === id){
                this.SpaceCraft.splice(id, 1)
            } else {
                console.log('Not found...')
            }
        }
        
    }
    // public removeCombatCapable(id: number): void{
    //     for(let i = 0; i < this.combatShips.length; i++){
    //         if(this.combatShips[i].getId() === id){
    //             this.SpaceCraft.splice(id, 1)
    //         } else {
    //             console.log('Not found...')
    //         }
    //     }
    //     this.combatShips.splice(id, 1)
    // }
    // public removeExploratory(id: number): void{
    //     this.ExploreShips.splice(id, 1)
    // }
    // public removeTransportation(id: number): void{
    //     this.TransportShips.splice(id, 1)
    // }

    public findShip(id: number): Spacecraft | undefined{
        return this.SpaceCraft[id]
    }

    // public findCombatCapable(id: number): CombatCapable | undefined{
    //     return this.combatShips[id]
    // }

    // public findTransportation(id: number): CargoCarrier | undefined{
    //     return this.TransportShips[id]
    // }
    
    // public findExploration(id: number): Exploratory | undefined{
    //     return this.ExploreShips[id]
    // }

    public showFleet(): void{
        console.clear()
        console.log(`
--------------------
SpaceCraft:
--------------------
${this.SpaceCraft}
`)
    }
}
