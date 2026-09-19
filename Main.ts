import { Book } from "./book";
import { clothes } from "./clothes";
import { eletronic } from "./eletronic";
import { stock } from "./stock";
import { Toy } from "./Toy";

const estoqueLivros = new stock<Book>();
const estoqueRoupas = new stock<clothes>();
const estoqueBrinquedos = new stock<Toy>();
const estoqueEletronicos = new stock<eletronic>();
import readlineSync from "readline-sync";

let l = 9;

function menu(): void {

    while (l != 0) {

        l = Number(readlineSync.question(`
=========================
       STOCK SYSTEM
=========================

1 - Add product

2 - List products

3 - Remove product

4 - Search products

0 - Exit

Choose an option:
`));

        switch (l) {
            case 1:
                let product = Number(readlineSync.question(`
=========================
       ADD PRODUCT
=========================

1 - Book
2 - Clothing
3 - Toy
4 - Electronic

Choose a product type: `));
                switch (product) {
                    case product = 1:
                        let Title = readlineSync.question('Title of the book: ')
                        let Author = readlineSync.question('Author of the book: ')
                        let Prize = Number(readlineSync.question('Prize of the book: '))

                        const book = new Book(Title, Author, Prize)
                        estoqueLivros.adicionar(book)
                        break
                    case product = 2:

                        let desc = readlineSync.question('Description of the clothes')
                        let size = readlineSync.question('What is the of the clothes?')
                        let prize = Number(readlineSync.question('What is the prize of the clothes?'))

                        const Clothes = new clothes(desc, size, prize)
                        estoqueRoupas.adicionar(Clothes)
                        
                        break
                    case product = 3:

                        let name = readlineSync.question('What is the name of the toy?')
                        let ageMinimum = Number(readlineSync.question('What is the minimum age of the kid that need to play with the toy?'))
                        let Prize1 = Number(readlineSync.question('Prize of the toy: '))

                        const toy = new Toy(name, ageMinimum, Prize1)
                        estoqueBrinquedos.adicionar(toy)
                        break
                    case product = 4:

                        let model = readlineSync.question('What is the model of the Eletronic? ')
                        let mark = readlineSync.question('What is the mark of the Eletronic? ')
                        let prize3 = Number(readlineSync.question('What is the prize of the Eletronic? '))
                        const eletronicbase = new eletronic(model, mark, prize3)

                        estoqueEletronicos.adicionar(eletronicbase)
                        break
                    default:
                        menu()
                        break

                } 
                break;

            case 2:
                
                console.log(`Estoque livros:
${estoqueLivros}
------------------------
Estoque Roupas:
${}`)
                // listar produtos
                break;

            case 3:
                // remover produto
                break;

            case 4:
                // procurar produto
                break;

            case 0:
                console.log("Exiting...");
                break;

            default:
                console.log("Invalid option!");
        }
    }
}


