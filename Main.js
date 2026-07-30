"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Warrior_1 = require("./Warrior");
const Monster_1 = require("./Monster");
const warrior1 = new Warrior_1.Warrior('lohan', 'Guerreiro');
const warrior2 = new Warrior_1.Warrior('Lialvan', 'Espadachim');
const monster1 = new Monster_1.Monster('Gugaga', 'Bebelord');
const monster2 = new Monster_1.Monster('Manha', 'SIUUUUUUUu');
// console.log(monster1.getName())
// monster1.attack()
// console.log(warrior1.getName())
// warrior1.dodge()
// import { Dog } from "./Dog";
// const dog1: Dog = new Dog(`Rodolfo`, 0)
// dog1.bark()
warrior1.setter('Lialvan');
console.log(warrior1.getName());
monster1.setterforca(10);
console.log(monster1.getforca());
