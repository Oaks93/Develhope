class Person {
  #age
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.#age = age
  }

  set age(valor){
    if(valor>130){
      this.#age = 130
    } else if (valor<1){
      this.#age = 1
    }else{
      this.#age = valor
    }
  }

  get fullName(){
    return this.name + " " +this.lastName
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.name = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);