import { Animal } from "./Animal";

export class Bird extends Animal {
    
    constructor(nome: string, idade: number){
        super(nome, idade)
    }
}