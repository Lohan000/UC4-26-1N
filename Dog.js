"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    nameParameter;
    weightParameter;
    name;
    weight;
    constructor(nameParameter, weightParameter) {
        this.nameParameter = nameParameter;
        this.weightParameter = weightParameter;
        this.name = nameParameter;
        this.weight = weightParameter;
    }
    bark() {
        console.log(`au au`);
    }
    eat() {
        console.log(`nham nham`);
    }
}
exports.Dog = Dog;
