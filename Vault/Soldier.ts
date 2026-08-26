import { Resident } from "./Resident";

export class Soldier extends Resident{
    public chosenClass: string

    constructor(name: string,health: number,age: number, chosenClass: string){
        super(name, health, age)
        this.chosenClass = 'Soldier'
    }

    public getterName(): string{
        return this.name
    }

    public getterHealth(): number{
        return this.health
    }

    public getterAge(): number{
        return this.age
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public setterHealth(newHealth: number): void{
        this.health = newHealth
    }

    public setterAge(newAge: number): void{
        this.age = newAge
    }

    public work(){
        console.log(`the soldier protects the room...`)
    }
}
