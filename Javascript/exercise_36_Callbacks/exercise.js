function repeatHello(cb){
     const intervaler = setInterval(cb,1000)
     setTimeout(()=> clearInterval(intervaler),5000)
}


const sayHello = () =>console.log("Hello");

repeatHello(sayHello)