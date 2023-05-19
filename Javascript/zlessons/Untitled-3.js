
class Person {
    #location;
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.#location = location;

    }
    walk() {
        console.log(this.name + " is walking");
    }
    static eat(person) {
        console.log(person.name + " is eating");
    }

    get location() {
        return this.#location;
    }

    set location(location) {
        this.#location = location;
    }

}
let carlos = new Person("carlos", 29,"barcelona")
console.log(carlos.location);