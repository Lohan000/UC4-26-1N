import { Reptil } from "./Reptil";

export class Crocodile extends Reptil {
    
    constructor(nome: string, idade:number, tipoEscama: string){
        super(nome, idade, tipoEscama);
    }

    swim(): void{
        console.log(`${this.nome} está nadando...`)
    }
    
}