export class Person {
    private name: string
    private age: number

    constructor(public nameParameter: string, public ageParameter: number){
        this.name = nameParameter
        this.age = ageParameter

    }
    
    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
    public setName(newname: string): void {
        this.name = newname
    }
    public setAge(newage: number): void {
        this.age = newage
    }
    public introduce(): any {
        return `Hello! My name is ${this.name} and I am ${this.age} years old.`
    }
    
}