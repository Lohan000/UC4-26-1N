import { Resident } from "./Resident";

export class Medic extends Resident{
    public chosenClass: string    

    public constructor(name: string, age: number){
        super(name, age)
        this.chosenClass = 'Médico'
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

    public getterChosenClass(): string{
        return this.chosenClass
    }

    public setterChosenClass(newClass: string): void{
        this.chosenClass = newClass
    }

    public work(): void{
        console.log(`the medic helps the pacient`)
    }
}