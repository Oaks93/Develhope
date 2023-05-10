function printName() {
    const helloName = "Hello John";
    function inner() {
        return helloName
    }
    return inner

}
const result = printName();
console.log(result());
