function multiplyByTwo(value) {
  let number = 2;
  function inner(number) {
      return number * value;
  }
  return inner;
}

const multiplyBy = multiplyByTwo(2);
console.log(multiplyBy(10));