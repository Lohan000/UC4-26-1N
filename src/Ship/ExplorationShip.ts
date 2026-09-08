import { Exploratory } from "../Interface/Exploratory";
import { Spacecraft } from "./SpaceCraft";

export class ExplorationShip extends Spacecraft implements Exploratory{
    private currentLocation: string

    public constructor(id: number, name: string, fuel: number, health: number, currentLocation: string){
        super(id, name, fuel, health)
        this.currentLocation = currentLocation 
    }
    explore(location: string): string {
        if(this.getFuel() - 1 > 0){
            this.currentLocation = location 
        return `The ship ${this.Getname()} starts exploring ${location}` 
        } else {
            }
        
    }
    collectData(): string {
        throw new Error("Method not implemented.");
    }
}