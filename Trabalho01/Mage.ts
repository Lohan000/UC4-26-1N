import { Character } from "./Character";
import { Spell } from "./Spell";
export class Mage extends Character{
    private mana: number
    private spell: Spell

    public constructor(name: string, level: number, health: number, mana: number, spell: Spell){
        super(name, level, health)
        this.mana = mana
        this.spell = spell
    }

    public getterMana(): number{
        return this.mana
    }

    public getterSpell(): Spell{
        return this.spell
    }

    public setterMana(newMana: number): void{
        this.mana = newMana
    }

    public setterSpell(newSpell: Spell): void {
        this.spell = newSpell
    }

    public castSpell(spell1: Spell): void{
        if (this.mana > spell1.getterManaCost()){
            console.log(`${this.name} casts ${spell1.getterName()}
Damage: ${spell1.getterDamage()}
Mana remaining: ${this.mana}`)
    } else {
        console.log(`${this.name} does not have enough mana!`)
    }
    }
}