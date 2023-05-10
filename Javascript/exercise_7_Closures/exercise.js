function printName() {
    const helloName = "Hello John";
    function inner() {
        return helloName
    }
    return inner

}
const result = printName()
console.log(result());
setTimeout(() => console.log(result()),1000)

//This was a difficult exercise to understand because I was not able to find anything related within the link that the exercise proposes as support. nothing important because by doing a little research on setTimeout on the internet you can solve it, but keep it in mind for future students