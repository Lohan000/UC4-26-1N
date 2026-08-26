import { Resident } from "./Resident";

export class Scientist extends Resident{
    public chosenClass: string

    constructor(name: string,age: number){
        super(name, age)
        this.chosenClass = 'Scientist'
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


    public setterAge(newAge: number): void{
        this.age = newAge
    }

    public setterChosenClass(newClass: string): void{
        this.chosenClass = newClass
    }

    public work(){
        console.log(`The scientist studies...`)
    }
}
