export class Dog{
    private name: string
    private weight: number

    constructor(public nameParameter: string, public weightParameter:number){
        this.name = nameParameter
        this.weight = weightParameter
    }

    public bark(): void{
        console.log(`au au`)
    }
    public eat(): void{
        console.log(`nham nham`)
    }
}