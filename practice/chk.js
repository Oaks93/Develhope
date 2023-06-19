// function capitalizeWords(array){
//     return array.map((el)=>el[0].toUpperCase()+ el.slice(1))
     
//   }
//   console.log(capitalizeWords(["hello", "world"]));

// function isPalindrome(param){
//   return param.split("").reverse().join("") === param
//  }
// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"))

fetch("https://northwind.vercel.app/api/products")

.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=> console.log(error))
    