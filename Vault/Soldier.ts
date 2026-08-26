import { Resident } from "./Resident";

export class Soldier extends Resident{
    public chosenClass: string

    constructor(name: string,age: number){
        super(name, age)
        this.chosenClass = 'Soldier'
    }

    public getterName(): string{
        return this.name
    }

    public getterChosenClass(): string{
        return this.chosenClass
    }

    public getterAge(): number{
        return this.age
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public setterChosenClass(newClass: string): void{
        this.chosenClass = newClass
    }

    public setterAge(newAge: number): void{
        this.age = newAge
    }

    public work(){
        console.log(`the soldier protects the room...`)
    }
}
