import { Resident } from "./Resident";

export class Medic extends Resident{
    

    public constructor(name: string, health: number, age: number){
        super(name, health, age)
    }

    public getterName(): string{
        return this.name
    }

    public getterAge(): number{
        return this.age
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public setterAge(newAge: number): void{
        this.age = newAge
    }

    public work(resident: Resident): void{
        resident.setterHealth(100)
        console.log(`${this.name} curou ${resident.getterName()}!`)
    }
}