export abstract class Spacecraft {
    private id: number
    private name: string
    private fuel: number
    private health: number

    constructor(id: number, name: string, fuel: number, health: number){
        this.id = id
        this.name = name
        this.fuel = fuel
        this.health = health
    }

    public getId(): number{
        return this.id
    }

    public Getname(): string{
        return this.name
    }

    public getFuel(): number{
        return this.fuel
    }

    public getHealth(): number{
        return this.health
    }

    public refuel(): void{
        this.fuel += 100
    }

    public takeDamage(damage:number): void{
        if(this.health - damage < 0){
            this.health = 0
        } else {
            this.health -= damage
        }
    }

    public repair(): void{
        this.health = 100
    }

    public isOperational(): boolean{
        return this.health > 0
    }
}