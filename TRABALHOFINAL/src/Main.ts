import { Food } from "./Class/Food";
import { Institution } from "./Class/Institution";
import readlineSync from "readline-sync";
import { CommunityGardenProducer } from "./Class/CommunityGardenProducer";
import { FamilyFarmer } from "./Class/FamilyFarmer";
import { producer } from "./Class/produtores";
import { Registry } from "./Class/Registry";


function Donation(aliment: Food, quantity: number, instituion: Institution): void{
    if(aliment.showquantity() - quantity <=0){
        throw new Error(`this food doesn't have this quantity`)
    }

    aliment.retirequantity(quantity)
    instituion.setQuantityP(quantity)

    console.log(`

========================================
          NEW DONATION
========================================

Food: ${aliment}
Quantity: ${quantity} Kg
Institution: ${instituion}

Donation completed successfully!`)
}


const producers = new Registry<producer>([]);
const foods = new Registry<Food>([]);
const institutions = new Registry<Institution>([]);

const ask = readlineSync;

let play = 1
while (0 != play){
let a = Number(ask.question(`
========================================
       RAÍZES DA TERRA COOPERATIVE
========================================

[1] Register producer
[2] Register food
[3] Register institution
[4] List producers
[5] List food
[6] List institutions
[7] Make donation
[0] Exit

Choose an option: `))
    switch(a){
        case 1: {
            console.log("--- Register Producer ---");
            
            const name = ask.question("Name: ");
            const CPF = ask.question("CPF: ");
            const aliments = Number(ask.question("Amount of food: "));
            const class1 = ask.question(`Class: [1] Community Garden Producer, [2] Family Farmer. Choose:  `);

            const type = Number(ask.question("Producer type: "));

            let newProducer: producer;

            if (type === 1) {
                newProducer = new CommunityGardenProducer(name,CPF,aliments,class1,[]);
            } else if (type === 2) {
                newProducer = new FamilyFarmer(name,CPF,aliments,class1,[]);
            } else {
                console.log("Invalid producer type.");
                break;
            }

            producers.add(newProducer);

            console.log("Producer registered successfully!");
            break;
        }

        case 2: {
            console.log(`--- Register Food ---`);

            const name = ask.question("Food name: ");
            const category = ask.question("Category: ");
            const quantity = Number(ask.question("Quantity: "));

            const producerList = producers.list();

            if (producerList.length === 0) {
                console.log("There are no registered producers.");
                break;
            }

            console.log(`--- Producers ---`);

            producers.list()

            const producerIndex =
                Number(ask.question("Choose the producer: ")) - 1;

            if (
                producerIndex < 0 ||
                producerIndex >= producerList.length
            ) {
                console.log("Invalid producer.");
                break;
            }

            const newFood = new Food(
                name,
                category,
                quantity,
                producerList[producerIndex]
            );

            foods.add(newFood);

            console.log("Food registered successfully!");
            break;
        }

        case 3: {
            console.log("\n--- Register Institution ---");

            const name = ask.question("Institution name: ");
            const address = ask.question("Address: ");
            const quantityP = Number(
                ask.question("Number of people: ")
            );

            const newInstitution = new Institution(
                name,
                address,
                quantityP
            );

            institutions.add(newInstitution);

            console.log("Institution registered successfully!");
            break;
        }

        case 4: {
            console.log("\n--- Producers ---");

            const list = producers.list();

            if (list.length === 0) {
                console.log("No producers registered.");
                break;
            }

            for (let i = 0; i < list.length; i++) {
                console.log(`\nProducer ${i + 1}`);
                console.log(`Name: ${list[i].getName()}`);
                console.log(`CPF: ${list[i].getCPF()}`);
                console.log(`Food: ${list[i].getAliments()}`);
                console.log(`Class: ${list[i].getClass1()}`);
                list[i].present();
            }

            break;
        }

        case 5: {
            console.log("\n--- Food ---");

            const list = foods.list();

            if (list.length === 0) {
                console.log("No food registered.");
                break;
            }

            for (let i = 0; i < list.length; i++) {
                console.log(`\nFood ${i + 1}`);
                console.log(`Quantity: ${list[i].showquantity()}`);
            }

            break;
        }

        case 6: {
            console.log("\n--- Institutions ---");

            const list = institutions.list();

            if (list.length === 0) {
                console.log("No institutions registered.");
                break;
            }

            for (let i = 0; i < list.length; i++) {
                console.log(`\nInstitution ${i + 1}`);
                console.log(`Name: ${list[i].getName()}`);
                console.log(`Address: ${list[i].getAddress()}`);
                console.log(`People: ${list[i].getQuantityP()}`);
            }

            break;
        }

        case 7: {
            console.log("--- Make Donation ---");

            const foodList = foods.list();
            const institutionList = institutions.list();

            if (foodList.length === 0) {
                console.log("There is no food available.");
                break;
            }

            if (institutionList.length === 0) {
                console.log("There are no institutions registered.");
                break;
            }

            console.log("\n--- Food ---");

            for (let i = 0; i < foodList.length; i++) {
                console.log(
                    `[${i + 1}] Food ${i + 1} - Quantity: ${foodList[i].showquantity()}`
                );
            }

            const foodIndex =
                Number(ask.question("Choose the food: ")) - 1;

            if (
                foodIndex < 0 ||
                foodIndex >= foodList.length
            ) {
                console.log("Invalid food.");
                break;
            }

            console.log("\n--- Institutions ---");

            for (let i = 0; i < institutionList.length; i++) {
                console.log(
                    `[${i + 1}] ${institutionList[i].getName()}`
                );
            }

            const institutionIndex =
                Number(ask.question("Choose the institution: ")) - 1;

            if (
                institutionIndex < 0 ||
                institutionIndex >= institutionList.length
            ) {
                console.log("Invalid institution.");
                break;
            }

            const quantity = Number(
                ask.question("Quantity to donate: ")
            );

            if (quantity <= 0) {
                console.log("Invalid quantity.");
                break;
            }

            if (quantity > foodList[foodIndex].showquantity()) {
                console.log("There isn't enough food.");
                break;
            }

            foodList[foodIndex].donate(quantity);

            institutionList[institutionIndex].setQuantityP(
                institutionList[institutionIndex].getQuantityP() + quantity
            );

            console.log("Donation completed!");

            break;
        }

        case 0:
            console.log("Program finished.");
            break;

        default:
            console.log("Invalid option.");
    }

} while (option !== 0);
    
        