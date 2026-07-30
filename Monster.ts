export class Monster{
    private name: string
    private type: string
    private strength: number
    private life: number

    constructor(public nameParameter: string, public typeParameter: string){
        this.name = nameParameter;
        this.type = typeParameter;
        this.strength = 20;
        this.life = 50;
    }

    public getName(): string{
        return this.name
    }
    public setter(newname: string): void{
        this.name = newname
    }
    public getforca(): number{
        return this.strength
    }
    public setterforca(newforca: number): void{
        this.strength = newforca
    }
    public attack(): void {
        console.log(`tome seu nojento`)
    }
    public defend(): void {
        console.log(`Defende`)
    }
    public dodge(): void {
        console.log('Esquiva e te mato')
    }
}