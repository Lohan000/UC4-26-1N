import { Resident } from "./Resident";
export class Place{
    protected name: string;
    protected residentmax: number
    protected resident: Resident[]

    constructor(name: string, residentmax: number, resident: Resident[]){
        this.name = name
        this.residentmax = residentmax
        this.resident = resident
    }

    public getterName(): string{
        return this.name
    }

    public getterResidentMax(): number{
        return this.residentmax
    }

    public getterResident(): Resident[]{
        return this.resident
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public addResident(newResident: Resident): void{
        for(let i = 0; this.resident.length > i; i++){
            if(newResident === this.resident[i]){
                console.log(`This Resident is already in...`)
            } else {
                this.resident.push(newResident)
            }
        }
            
    }

    public removeResident(rmResident: Resident): void{
        for(let i = 0; this.resident.length > i; i++){
            if(rmResident == this.resident[i]){
                this.resident.splice(i, 1)
                break
            } else {
                console.log(`Resident not found`)
            }
        } 
    }

    public setterResidentMax(newResidentMax: number): void{
        this.residentmax = newResidentMax
    }
}