import { Warrior } from "./Warrior";
import { Monster } from "./Monster";

const warrior1: Warrior = new Warrior('lohan','Guerreiro')
const warrior2: Warrior = new Warrior('Lialvan', 'Espadachim')
const monster1: Monster = new Monster('Gugaga', 'Bebelord')
const monster2: Monster = new Monster('Manha', 'SIUUUUUUUu')

// console.log(monster1.getName())
// monster1.attack()
// console.log(warrior1.getName())
// warrior1.dodge()

// import { Dog } from "./Dog";

// const dog1: Dog = new Dog(`Rodolfo`, 0)

// dog1.bark()

warrior1.setter('Lialvan')
console.log(warrior1.getName())

monster1.setterforca(10)
console.log(monster1.getforca())