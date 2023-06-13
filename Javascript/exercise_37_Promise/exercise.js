const number = 15;

let myPromise = new Promise((resolve, reject) => {
    if (number>10){
        resolve(number + " is bigger than 10")
    }else{reject(number + " is smaller than 10")}
    
})

myPromise
.then((val)=> console.log(val))
.catch((err)=>console.log(err))