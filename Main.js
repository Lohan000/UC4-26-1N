"use strict";
// import { Person } from "./Person";
Object.defineProperty(exports, "__esModule", { value: true });
// let Person1: Person = new Person ('Lialvan', 19)
// let Person2: Person = new Person ('Logetto', 30)
// console.log(Person1.getName())
// console.log(Person1.getAge())
// console.log(Person2.getName())
// console.log(Person2.getAge())
// Person2.setAge(27)
// console.log(Person2.getAge())
// import { car } from "./car";
// let car1: car = new car ('Fusquinha amarelinha', 'VROOM', 2009)
// car1.acelerate(-1)
// car1.showinformation()
// car1.acelerate(50000000000)
// car1.showinformation()
// car1.brake(500000000000000000000)
// car1.showinformation()
// import { bankAccount } from "./BankAccount"
// let bankAccount1: bankAccount = new bankAccount ('RODOLFO', 10)
// bankAccount1.deposit(100)
// bankAccount1.showBalance()
// bankAccount1.withdraw(10)
// bankAccount1.showBalance()
// bankAccount1.withdraw(1000000000000000000)
// bankAccount1.showBalance()
// import { product } from "./Product";
// let product1: product = new product ('SAPATO', 17, 20)
// let product2: product = new product ('TENIS', 15, 30)
// let product3: product = new product ('NIKE', 900, 1)
// product1.addstock(5)
// product2.removeStock(5)
// console.log(product1.showProduct())
const book_1 = require("./book");
let book1 = new book_1.book('Bem-te-vi', 'Logetto', 67, true);
let book2 = new book_1.book('Espiral', 'Lialvan', 100, true);
book2.borrow();
book2.showinformation();
// import { student } from "./Students";
// let student1: student = new student ('Lialvan', 10, 8)
// let student2: student = new student ('Pablo', 5, 5)
// let student3: student = new student ('Rodolfo', 10, 10)
// console.log(student1.calculateAverage())
// student1.approved()
// console.log(student2.calculateAverage())
// student2.approved()
// console.log(student3.calculateAverage())
// student3.approved()
