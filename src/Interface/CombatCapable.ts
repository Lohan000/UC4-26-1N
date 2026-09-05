import { Spacecraft } from "../Ship/SpaceCraft";

export interface CombatCapable{
    attack(target: Spacecraft): number;
}