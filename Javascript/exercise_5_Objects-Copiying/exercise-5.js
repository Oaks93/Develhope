const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
//This exercise can be solved in two different ways, one way that records that the name has been changed, that is to say:
person2.firstName = "Simon";
//Or simply by changing the value of firstName in the declaration of person1, since they are the same and changing the value of any attribute of one of the objects automatically changes the value of the other.

// This JavaScript code creates two objects person1 and person2. person1 has three properties: firstName, lastName, and age. person2 is assigned to person1, which means both objects point to the same memory location. This means that any changes made to person2 will also be reflected in person1.

console.log(person1);
console.log(person2);
