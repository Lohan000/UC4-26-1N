export class Characters {
    private nome: string;
    private vida: number;

   public constructor(nome:string, vida: number){
    this.nome = nome
    this.vida = vida
   }

   receberDano(dano: number): void{
    if(this.vida - dano <= 0){
        throw new Error('Sua vida acabou!')
        this.vida = 0
    }

    if(dano =)

    this.vida = this.vida - dano
    
   }
}