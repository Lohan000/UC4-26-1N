export class Dog{
    name: string
    weight: number

    constructor(nameParameter: string, weightParameter:number){
        this.name = nameParameter
        this.weight = weightParameter
    }

    bark(): void{
        console.log(`au au`)
    }
    eat(): void{
        console.log(`nham nham`)
    }
}