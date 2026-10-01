import { Count } from "./Numbers";

const calculadora = new Count


try{
    const resultado = calculadora.dividir2(2, 6)
} catch (erro){

    if(erro instanceof Error){
        console.log(erro.message);
    }
    
}   
