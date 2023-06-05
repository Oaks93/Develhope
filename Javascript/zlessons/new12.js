// // function newe(name, cb) {
// //     console.log(name);
// //     cb()
// // }

// // function myCb() {
// //     console.log("hello");
// // }

// // newe("Carlos", myCb)
 

// function Burak(name){
//     return new Promise(
//         function (resolve,reject){
//             setTimeout(function(){
//                 console.log(name);
//                 resolve()
//             },2000)
//         }
//     )
// }
// function Carlos(name){
//     return new Promise(
//         function (resolve,reject){
//             setTimeout(function(){
//                 console.log(name);
//                 resolve()
//             },1000)
//         }
//     )
// }

// // Burak("carlos")
// // .then(()=>Carlos("Ali")).then(()=>console.log("welldone"))
// // .catch(() => console.log("fail"))

// async function heee(){
//     try {
//         await Carlos("Hello")
//         await Burak("Bye") 
//         console.log("Finished");
//     } catch (error) {
//         console.log("error");
//     }
// }

// heee()

function fetchUserData() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("User data");
      }, 2000);
    });
  }
  
  function fetchAccountData() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Account data");
      }, 1500);
    });
  }
  
  function fetchTransactionData() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Transaction data");
      }, 1000);
    });
  }

// Promise.all([fetchAccountData(),fetchTransactionData(),fetchUserData()])
// .then(()=>console.log("finished"))
// .catch(()=>console.log("error"))

Promise.race([fetchAccountData(),fetchTransactionData(),fetchUserData()])
.then(()=>console.log("finished"))
.catch(()=>console.log("error"))