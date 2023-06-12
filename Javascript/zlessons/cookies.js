function display() { 
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*36000;
    now.setTime(expireTime);
    document.cookie = 'cookie=ok;expires='+now.toUTCString()+';path=/';
    console.log(document.cookie);  // 'Wed, 31 Oct 2012 08:50:17 UTC'
  }
 display()
localStorage.setItem("name", "Carlos")
// localStorage.removeItem("name")
let myData = localStorage.getItem("name")
console.log(myData);