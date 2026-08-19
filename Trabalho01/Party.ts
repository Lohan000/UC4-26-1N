import { Character } from "./Character"

export class Party{
    private name: string
    private members: Character[]

    constructor(name: string, members: Character[]){
        this.name = name
        this.members = members
    }

    public gettername(): string{
        return this.name
    }

    public gettermembers(): Character[]{
        return this.members
    }

    public settername(newName: string): void{
        this.name = newName
    }
    public setterMembers(newMembers: Character[]): void{
        this.members = newMembers
    }

    public addMember(character: Character): void{
        this.members.push(character)
    }

    public removeMember(character: Character): void{
        for(let i = 0; this.members.length > i; i++){
            if(character == this.members[i]){
                this.members.splice(i, 1)
                break
            }
        } 
    }

    public showMembers(): void{
        console.log(`
----------------------------------
${this.name}
----------------------------------`)
        for(let member of this.members){
            console.log(`${member.getterName()} - Level ${member.getterLevel()
                
            }`)
        }
    }
}