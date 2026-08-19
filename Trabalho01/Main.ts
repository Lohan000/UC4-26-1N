import { Character } from "./Character";
import { Mage } from "./Mage";
import { Party } from "./Party";
import { Spell } from "./Spell";
import { Weapon } from "./Weapon";
import { monster } from "./Monster";
import { Warrior } from "./Warrior";

let weapon1: Weapon = new Weapon('Furia', 20)
let weapon2: Weapon = new Weapon('Medo'20)

let Spell1: Spell = new Spell('Norespira', 100, 50)
let Spell2: Spell = new Spell('Pikachu', 22, 10)

let Warrior1: Warrior = new Warrior('Lialvan', 36, 40, 15, weapon1)
let Warrior2: Warrior = new Warrior('Loven', 30, 35, 20, weapon2)

let Mage1: Mage = new Mage('Lekeh', 11, 20, 50, Spell1)
let Mage2: Mage = new Mage('Tilian', 15, 22, 40, Spell2)

let Party1: Party = new Party('incapacitated disabilities', [Warrior1, Warrior2, Mage1, Mage2])

console.log(Party1.gettermembers())
Party1.showMembers()

Warrior1.attack()
Warrior2.attack()

Mage1.castSpell(Spell1)
Mage2.castSpell(Spell2)

console.log(Spell1.getterManaCost())
