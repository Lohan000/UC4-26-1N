export abstract class producer {
    protected name: string;
    protected CPF: string;
    protected aliments: number
    protected class1: string
    protected producers: producer[] = [];

    public constructor(name: string, CPF: string, aliments: number, class1: string, producers: producer[]){
        this.name = name
        this.CPF = CPF
        this.aliments = aliments
        this.class1 = class1
        this.producers = producers
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

    public abstract present(): void;


}