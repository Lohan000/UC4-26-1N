export class Institution {
    private name: string;
    private address: string;
    private quantityP: number;


    public constructor(name: string, address: string, quantityP: number){
        this.name = name
        this.address = address
        this.quantityP = quantityP
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getQuantityP(): number {
        return this.quantityP;
    }

    public setQuantityP(quantityP: number): void {
        this.quantityP = quantityP;
    }

    
}