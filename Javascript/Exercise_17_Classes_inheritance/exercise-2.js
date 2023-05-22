class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }

  static hello(param) {
    console.log("static")
    console.log(this)
    console.log(this.firstName)
    console.log(Developer.world())
    console.log(param)
  }

  static world() {
    console.log("world")
  }

  hello() {
    console.log("non static")
    console.log(this)
    console.log(this.firstName)
  }
}

function hello() {
  console.log("global")
  console.log(this)
}

const developer = new Developer("Mario", "Rossi", "Front-end");
Developer.hello("par")
developer.hello()
hello()
// console.log(
//   developer.firstName + " " + developer.lastName + " " + developer.role
// );



class Person {
  constructor(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  }
  }
  
  const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
  };
  
  const person = Person.fromObject(obj);
  console.log(person.firstName + " " + person.lastName);