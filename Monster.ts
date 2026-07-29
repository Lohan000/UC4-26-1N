export class Monster{
    name: string
    type: string
    strength: number
    life: number

    constructor(nameParameter: string, typeParameter: string, strengthParameter: number, lifeParameter)

    attack(): void {
        console.log(`tome seu nojento`)
    }
    defend(): void {
        console.log(`Defende`)
    }
    dodge(): void {
        console.log('Esquiva e te mato')
    }
}