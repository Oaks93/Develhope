
const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
// const { name, age, city } = person
const { name: fullName, age: years, city: residence } = person;
const employee = {
    name2: "Jane Smith",
    position: "Manager",
    languages: {
        primary: "JavaScript",
        secondary: "Python",
    },
};

const { name2, position, languages: { primary, secondary } } = employee

const person1 = {
    name1: "John Doe",
    age: 30,
    city: "New York",
    country: "USA",
    languages: ["JavaScript", "Python",]
};

const { name1, age, ...details } = person1

console.log(details.languages[0]);

const cat = {
    nick: "Garffield",
    old: 9
}
const dog = {
    name: "Becky",
    age: 12
}
const combinedObj = { ...dog, ...cat }
console.log(combinedObj);

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const combineArr = [...arr1, ...arr2]
console.log(combineArr);
const data = {
    user: "John Doe",
    notifications: [{ message: "New email" }, { message: "New message" }],
};


const { user, notifications: [{ message: emailMessage }, { message: secondMessage }] } = data;

const numbers = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numbers;

const colors = ["red", "green", "blue", "yellow"];
const [primary, , secondary] = colors;
console.log(primary);