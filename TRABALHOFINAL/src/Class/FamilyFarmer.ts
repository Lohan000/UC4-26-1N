import { producer } from "./produtores";

export class FamilyFarmer extends producer {
    
    

    public present(): void {
        console.log(`- property size`)
    }


    public constructor(name: string, CPF: string, aliments: number, class1: string, producers: producer[]){
        super(name, CPF, aliments, class1, producers)
    }
    
    // Getters
public getName(): string {
    return this.name;
}

public getCPF(): string {
    return this.CPF;
}

public getAliments(): number {
    return this.aliments;
}

public getClass1(): string {
    return this.class1;
}

public getProducers(): producer[] {
    return this.producers;
}

// Setters
public setName(name: string): void {
    this.name = name;
}

public setCPF(CPF: string): void {
    this.CPF = CPF;
}

public setAliments(aliments: number): void {
    this.aliments = aliments;
}

public setClass1(class1: string): void {
    this.class1 = class1;
}

public setProducers(producers: producer[]): void {
    this.producers = producers;
}
}