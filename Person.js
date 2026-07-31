"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    nameParameter;
    ageParameter;
    name;
    age;
    constructor(nameParameter, ageParameter) {
        this.nameParameter = nameParameter;
        this.ageParameter = ageParameter;
        this.name = nameParameter;
        this.age = ageParameter;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(newname) {
        this.name = newname;
    }
    setAge(newage) {
        this.age = newage;
    }
    introduce() {
        return `Hello! My name is ${this.name} and I am ${this.age} years old.`;
    }
}
exports.Person = Person;
