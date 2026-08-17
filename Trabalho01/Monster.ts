export class monster {
    private name: string
    private level: number
    private health: number
    private damage: number

    public constructor(name: string, level: number, health: number, damage: number){
        this.name = name
        this.level = level
        this.health = health
        this.damage = damage
    }

    public getterName(): string{
        return this.name
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public getterLevel(): number{
        return this.level
    }

    public setterLevel(newLevel: number): void{
        this.level = newLevel
    }

    public getterHealth(): number{
        return this.health
    }

    public setterHealth(newHealth: number){
        this.health = newHealth
    }

    public getterDamage(): number{
        return this.damage
    }

    public setterDamage(newDamage: number){
        this.damage = newDamage
    }
}