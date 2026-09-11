import { Spacecraft } from "../Ship/SpaceCraft";
import { CombatCapable } from "../Interface/CombatCapable";
import { CargoCarrier } from "./Interface/CargoCarrier";
import { Exploratory } from "./Interface/Exploratory";
import { ExplorationShip } from "./Ship/ExplorationShip";
import { Fighter } from "./Ship/Fighter";
import { MultiPurposeShip } from "./Ship/MultiPurposeShip";
import { TransportShip } from "./Ship/TransportShip";
import { Fleet } from "./Fleet/Fleet";

function startCombat(ship: CombatCapable, target: Spacecraft): void{
        ship.attack(target)
}

function transportCargo(ship: CargoCarrier, amount: number): void{
    ship.loadCargo(amount)
}

function performExploration(ship: Exploratory, location: string): void{
    if(typeof ship.explore === "function"){
        ship.explore(location)
    ship.collectData()
    } else {
        console.log(`This ship cannot explore...`)
    }
    
}

const fighter1 = new Fighter (1, `Logetto`, 100, 50, 10);
const fighter2 = new Fighter(5, `Layana`, 100, 100, 10)
const transportShip1 = new TransportShip (2, `Loven`, 100, 50, 10);
const transportShip2 = new TransportShip (6, `Rodolfo`, 100, 100, 10)
const explorationShip1 = new ExplorationShip(3, `Lialvan`, 100, 100);
const explorationShip2 = new ExplorationShip(7, `Lyhan`, 100, 100)
const multiPurposeShip1 = new MultiPurposeShip (4, `Lohan`, 100, 100, 20, 100, 10);


Spacecraft.addShip(fighter1)
Spacecraft.addShip(fighter2)
Spacecraft.addShip(transportShip1)
Spacecraft.addShip(transportShip2)
Spacecraft.addShip(explorationShip1)
Spacecraft.addShip(explorationShip2)
Spacecraft.addShip(multiPurposeShip1)

Spacecraft.Fleet()

startCombat(fighter1, multiPurposeShip1)

transportShip1.loadCargo(9)
transportShip1.unloadCargo(9)

performExploration(explorationShip1, `Mars`)
performExploration(multiPurposeShip1, `Jupiter`)

fighter1.attack(multiPurposeShip1)
multiPurposeShip1.attack(fighter1)


console.log(multiPurposeShip1.getFuel())
multiPurposeShip1.repair()
console.log(multiPurposeShip1.getFuel())
explorationShip1.refuel()

console.log()