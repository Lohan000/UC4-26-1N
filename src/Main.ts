import { Spacecraft } from "../Ship/SpaceCraft";
import { CombatCapable } from "../Interface/CombatCapable";
import { CargoCarrier } from "./Interface/CargoCarrier";
import { Exploratory } from "./Interface/Exploratory";
import { ExplorationShip } from "./Ship/ExplorationShip";
import { Fighter } from "./Ship/Fighter";
import { MultiPurposeShip } from "./Ship/MultiPurposeShip";
import { TransportShip } from "./Ship/TransportShip";

const combatShips: CombatCapable[] = [];
const ExploreShips: Exploratory[] = [];
const TransportShips: CargoCarrier[] = [];

combatShips.push(Fighter);
combatShips.push(MultiPurposeShip);
ExploreShips.push(ExplorationShip);



function startCombat(ship: CombatCapable, target: Spacecraft): void{
        ship.attack(target)
}

function transportCargo(ship: CargoCarrier, amount: number): void{
    ship.loadCargo(amount)
}

function performExploration(ship: Spacecraft, location: string): void{
    if(typeof ship.explore === "function"){
        ship.explore(location)
    ship.collectData()
    } else {
        console.log(`This ship cannot explore...`)
    }
    
}

const fighter1 = new Fighter (1, `Logetto`, 100, 50, 10);
const transportShip1 = new TransportShip (2, `Loven`, 100, 50, 10);
const explorationShip1 = new ExplorationShip(3, `Lialvan`, 100, 100);
const multiPurposeShip1 = new MultiPurposeShip(4, `Lohan`, 100, 100, 10, 10);

fighter1.attack(multiPurposeShip1)
multiPurposeShip1.attack(fighter1)
performExploration(explorationShip1, `Mars`)
performExploration(multiPurposeShip1, `Jupiter`)
performExploration(Fighter, 'Mars')