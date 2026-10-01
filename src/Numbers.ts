
export class Count {

    dividir(a: number, b: number): number{
        try {
            return a / b;
        } catch (error: unknown) {
            console.log(`can't divide by zero`)
            return 0;
        }
    }
   

    dividir2(a: number, b: number): number{
        if (b === 0){
            throw new Error("o divisor nao pode ser zero")
        }

        return a/b
    }
}