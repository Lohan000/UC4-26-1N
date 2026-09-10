import { Exploratory } from "../Interface/Exploratory";
import { Spacecraft } from "./SpaceCraft";

export class ExplorationShip extends Spacecraft implements Exploratory{
    private currentLocation: string

    public constructor(id: number, name: string, fuel: number, health: number){
        super(id, name, fuel, health)
        this.currentLocation = `lobby` 
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
        if(this.currentLocation === null){
            return `You are in the lobby yet, if you wanna gain new Data, then explore!`
        } else {
            return `Data colected...`
        }
    }
}