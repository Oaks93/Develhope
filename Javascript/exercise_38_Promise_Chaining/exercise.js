const isLogged = false;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    const randomNumber = Math.random();
    resolve(randomNumber);
  } else {
    reject("Error: user is not logged");
  }
});

const secondPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(`${number} is smaller than 0.5`);
    }
  });
};

firstPromise
  .then((randomNumber) => secondPromise(randomNumber))
  .catch((error) => console.error(error))
  .then((result) => {
    console.log(result); // No se imprimirá porque firstPromise será rechazada
  })
  .catch((error) => {
    console.error(error); // Error: El usuario no ha iniciado sesión
  });
