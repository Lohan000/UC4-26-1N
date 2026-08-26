export class Resident {
    protected name: string;
    protected age: number;

    public constructor(name: string,health: number,age: number){
        this.name = name
        this.age = age
    }

    public getterName(): string{
        return this.name
    }

    public getterAge(): number{
        return this.age
    }

    public setterName(newName: string): void{
        this.name = newName
    }

    public setterAge(newAge: number): void{
        this.age = newAge
    }

    public work(): void{
        console.log(`ELe trabalha em alguma coisa`)
    }
}