export class Registry<T> {
    private Registers: T[] = [];

    constructor(Registers: T[]){
        this.Registers = Registers
    }

    public add(object: T): void{
        this.Registers.push(object)
    }

    public find(object: T): T | undefined{
        for(let i = 0; this.Registers.length > i; i++){
            if(this.Registers[i] === object){
                return this.Registers[i]
            }
        }
    }

    public list(): T[]{
        return this.Registers
    }
}