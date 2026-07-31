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
const car_1 = require("./car");
let car1 = new car_1.car('Fusquinha amarelinha', 'VROOM', 2009);
car1.acelerate(-1);
car1.showinformation();
car1.acelerate(50000000000);
car1.showinformation();
car1.brake(500000000000000000000);
car1.showinformation();
