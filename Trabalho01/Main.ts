import { Character } from "./Character";
import { Mage } from "./Mage";
import { Party } from "./Party";
import { Spell } from "./Spell";
import { Weapon } from "./Weapon";
import { monster } from "./Monster";
import { Warrior } from "./Warrior";

let weapon1: Weapon = new Weapon('Furia', 20)
let weapon2: Weapon = new Weapon('Medo', 20)

let Spell1: Spell = new Spell('Norespira', 100, 50)
let Spell2: Spell = new Spell('Pikachu', 22, 10)

let Warrior1: Warrior = new Warrior('Lialvan', 36, 40, 15, weapon1)
let Warrior2: Warrior = new Warrior('Loven', 30, 35, 20, weapon2)

let Mage1: Mage = new Mage('Lekeh', 11, 20, 50, Spell1)
let Mage2: Mage = new Mage('Tilian', 15, 22, 40, Spell2)

let Party1: Party = new Party('incapacitated disabilities', [Warrior1, Warrior2, Mage1, Mage2])


Party1.showMembers()
console.log(Party1.gettermembers())

Warrior1.attack()
Warrior2.attack()

Mage1.castSpell(Spell1)
Mage2.castSpell(Spell2)

console.log(`
O mana cost da ${Spell1.getterName()}: ${Spell1.getterManaCost()}
`)

console.log(`

    ${Warrior1.getterName()}: ${Warrior1.getterHealth()}`)
Warrior1.TakeDamage(10)
console.log(`eu botei o cara tomar 10 de dano o ${Warrior1.getterName()} e agora ele ficou com ${Warrior1.getterHealth()}`)

Warrior1.setterHealth(1000)
console.log(`
Botei o Hp do ${Warrior1.getterName()} ${Warrior1.getterHealth()}
`)

Party1.showMembers()
Party1.removeMember(Mage2)
console.log(`
eu tirei o ${Mage2.getterName()}
`)
Party1.showMembers()

let monster1: monster = new monster(`Cupcake`, 100, 25, 50000000000000000)
console.log(`
A luta mais perigosa de todos os tempos quem ganha
`)

monster1.attack(Mage1)

Mage1.TakeDamage(monster1.getterDamage())

Mage2.castSpell(Spell2)
monster1.TakeDamage(Spell2.getterDamage())

Warrior1.attack()
monster1.TakeDamage(Warrior1.getterStrength() + weapon1.getterDamage())

