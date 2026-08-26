import { Resident } from "./Resident";

export class Engineer extends Resident {
    public chosenClass: string

    constructor(name: string, age: number, chosenClass: string){
        super(name,age)
        this.chosenClass = 'Engineer'
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
        console.log(`the Enginer repairs something...`)
    }
}