console.log("Start");

setTimeout(()=>{
    console.log(intervalId)
    },6000)

console.log("end");

let count = 0

let intervalId = setInterval(() => {
    console.log("Carlos");
    count++
    if (count == 5) {
        clearInterval(intervalId)
    }
    
}, 1000);

console.log(intervalId);
console.error("smth went wrong")