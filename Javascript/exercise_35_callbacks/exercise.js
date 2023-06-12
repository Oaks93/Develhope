function repeatHello(cb){
    setInterval(cb,1000)
}


const sayHello = () =>console.log("Hello");

repeatHello(sayHello)