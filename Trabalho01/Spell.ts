export class Spell{
    private name: string;
    private damage: number;
    private Manacost: number;


    public constructor(name: string, damage: number, Manacost: number){
        this.name = name
        this.damage = damage
        this.Manacost = Manacost
    }

    getterName(): string{
        return this.name
    }

    getterDamage(): number{
        return this.damage
    }

    getterManaCost(): number{
        return this.Manacost
    }

    setterName(newName: string): void{
        this.name = newName
    }

    setterDamage(newDamage: number): void{
        this.damage = newDamage
    }
    
    setterManaCost(newManaCost: number){
        this.Manacost = newManaCost
    }

    showInfo(): void{
        console.log(`
--------------------
Spell
--------------------
Name: ${this.name}
Damage: ${this.damage}
ManaCost: ${this.Manacost}            
`)
    }
}