"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
class Party {
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
    gettername() {
        return this.name;
    }
    gettermembers() {
        return this.members;
    }
    settername(newName) {
        this.name = newName;
    }
    setterMembers(newMembers) {
        this.members = newMembers;
    }
    addMember(character) {
        this.members.push(character);
    }
    removeMember(character) {
        for (let i = 0; this.members.length > i; i++) {
            if (character == this.members[i]) {
                this.members.splice(i, 1);
                break;
            }
        }
    }
    showMembers() {
        console.log(`
----------------------------------
${this.name}
----------------------------------`);
        for (let member of this.members) {
            console.log(`${member.getterName()} - Level ${member.getterLevel()}`);
        }
    }
}
exports.Party = Party;
