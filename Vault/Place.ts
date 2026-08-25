import { Resident } from "./Resident";
export class Place{
    protected name: string;
    protected residentmax: number
    protected resident1: Resident[]

    constructor(name: string, residentmax: number, resident1: Resident[]){
        this.name = name
        this.residentmax = residentmax
        this.resident1 = resident1
    }

    public getterName(): string{
        return this.name
    }

    public getterResidentMax(): number{
        return this.residentmax
    }

    public getterResident(): Resident[]{
        return this.resident1
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public setterResidentMax(newResidentMax: number): void{
        this.residentmax = newResidentMax
    }
}