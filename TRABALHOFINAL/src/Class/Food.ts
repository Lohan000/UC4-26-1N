import { Donatable } from "../interface/Donatable";
import { producer } from "./produtores";

export class Food implements Donatable {
    private name: string;
    private category: string;
    private quantity: number;
    private productor: producer

    public constructor(name: string, category: string, quantity: number, productor: producer){
        this.name = name
        this.category = category
        this.quantity = quantity
        this.productor = productor
    }
    donate(quantity: number): void {
        
    }

    public addquantity(value: number): void{
        this.quantity += value
    }

    public retirequantity(value: number): void{
        this.quantity -= value
    }

    public showquantity(): number{
        return this.quantity
    }
    

}