export class Character{
    protected name: string
    protected level: number
    protected health: number

    public constructor(name: string, level: number, health: number){
        this.name = name
        this.level = level
        this.health = health
    }

    public getterName(): string{
        return this.name
    }

    public getterLevel(): number{
        return this.level
    }

    public getterHealth(): number{
        return this.health
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public setterHealth(newhealth: number): void{
        this.health = newhealth
    }

    public setterLevel(newLevel: number): void{
        this.level = newLevel
    }

    public showInfo(): void{
        console.log(`
-------------------
Character:
-------------------
Name: ${this.name}
HP: ${this.health}
LEVEL: ${this.level}`)
    }

    public TakeDamage(amount: number): void{
        if(this.health > amount){
            console.log(`${this.name} takes ${amount} Damage`)
            this.health -= amount
        } else {
            console.log(`${this.name} takes ${amount} Damage`)
            this.health = 0
            console.log('Seu Personagem morreu')
        }
    }
}