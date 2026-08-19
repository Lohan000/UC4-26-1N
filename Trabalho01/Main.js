"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mage_1 = require("./Mage");
const Party_1 = require("./Party");
const Spell_1 = require("./Spell");
const Weapon_1 = require("./Weapon");
const Monster_1 = require("./Monster");
const Warrior_1 = require("./Warrior");
let weapon1 = new Weapon_1.Weapon('Furia', 20);
let weapon2 = new Weapon_1.Weapon('Medo', 20);
let Spell1 = new Spell_1.Spell('Norespira', 100, 50);
let Spell2 = new Spell_1.Spell('Pikachu', 22, 10);
let Warrior1 = new Warrior_1.Warrior('Lialvan', 36, 40, 15, weapon1);
let Warrior2 = new Warrior_1.Warrior('Loven', 30, 35, 20, weapon2);
let Mage1 = new Mage_1.Mage('Lekeh', 11, 20, 50, Spell1);
let Mage2 = new Mage_1.Mage('Tilian', 15, 22, 40, Spell2);
let Party1 = new Party_1.Party('incapacitated disabilities', [Warrior1, Warrior2, Mage1, Mage2]);
Party1.showMembers();
console.log(Party1.gettermembers());
Warrior1.attack();
Warrior2.attack();
Mage1.castSpell(Spell1);
Mage2.castSpell(Spell2);
console.log(`
O mana cost da ${Spell1.getterName()}: ${Spell1.getterManaCost()}
`);
console.log(`

    ${Warrior1.getterName()}: ${Warrior1.getterHealth()}`);
Warrior1.TakeDamage(10);
console.log(`eu botei o cara tomar 10 de dano o ${Warrior1.getterName()} e agora ele ficou com ${Warrior1.getterHealth()}`);
Warrior1.setterHealth(1000);
console.log(`
Botei o Hp do ${Warrior1.getterName()} ${Warrior1.getterHealth()}
`);
Party1.showMembers();
Party1.removeMember(Mage2);
console.log(`
eu tirei o ${Mage2.getterName()}
`);
Party1.showMembers();
let monster1 = new Monster_1.monster(`Cupcake`, 100, 25, 50000000000000000);
console.log(`
A luta mais perigosa de todos os tempos quem ganha
`);
monster1.attack(Mage1);
Mage1.TakeDamage(monster1.getterDamage());
Mage2.castSpell(Spell2);
monster1.TakeDamage(Spell2.getterDamage());
Warrior1.attack();
monster1.TakeDamage(Warrior1.getterStrength() + weapon1.getterDamage());
