import { Place } from "./Place";

export class Room{
    private Places: Place[]

    constructor(Places: Place[]){
        this.Places = Places
    }

    public getterPlaces(): Place[]{
        return this.Places
    }

    public setterPlaces(newPlaces: Place[]): void{
        this.Places = newPlaces
    }

    public addNewPlace(newPlace: Place): void{
        for(let i = 0; this.Places.length > i; i++){
            if(newPlace === this.Places[i]){
                console.log(`O lugar ja foi colocado...`)
            } else {
                this.Places.push(newPlace)
            }
        }
            
        
    }

    public rmPlace(Place: Place): void{
        for(let i = 0; this.Places.length > i; i++){
            if (Place === this.Places[i] ){
                this.Places.splice(i, 1)
            }
        }
    }
}