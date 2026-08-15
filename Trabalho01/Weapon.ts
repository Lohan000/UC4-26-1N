export class Weapon {
    private name: string
    private damage: number

    public constructor(name: string, damage: number){
        this.name = name
        this.damage = damage
    }

    public getterName(): string{
        return this.name
    }

    public getterDamage(): number{
        return this.damage
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public setterDamage(newDamage: number): void{
        this.damage = newDamage
    }

    public showInfo(): void{
        console.log(`
----------------
Weapon            
----------------
Name: ${this.name}
Damage: ${this.damage}
`)
    }
}