const me = {
    nombre: "carlos",
    edad: 30,
    developer: false,
    birthday: new Date(1993, 2, 16),
    book: {
        titulo: "La Tercera Puerta",
        autor: "Alex Bamayan",
        fecha: new Date(2018, 10),
        link: new URL("https://www.google.es/books/edition/La_tercera_puerta/RClxDwAAQBAJ?hl=es&gbpv=1&printsec=frontcover")

    }


}
console.log(Object.keys(people).includes("age"));
const people = [
    {
        name: "John Doe",
        age: 30,
        occupation: "Software Developer",
    },
    {
        name: "Jack",
        occupation: "CEO",
    },
];
for (let i = 0; i < people.length; i++) {
   let hasAge= Object.entries(people[i]).includes('age')
   if (hasAge){
    console.log("has the age");
   }

}
// people[i].hasOwnProperty('age')