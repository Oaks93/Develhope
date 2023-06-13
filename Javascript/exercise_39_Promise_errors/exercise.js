
const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    const randomNumber = Math.random();
    resolve(randomNumber);
  } else {
    reject(new Error("Error: user is not logged"));
  }
});

const secondPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error(`${number} is smaller than 0.5`))
    }
  });
};

firstPromise
.then((number) => secondPromise(number))
.then((result) => console.log(result))
.catch((error) => console.error(error))

