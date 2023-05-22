function sum(...num) {
    return num.reduce((acumulador, actual) => acumulador + actual, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5));
  