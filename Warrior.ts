export class Warrior{
    name: string
    type: string
    strength: number
    life: number

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