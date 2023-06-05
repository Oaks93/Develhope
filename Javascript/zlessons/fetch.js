let Carlos = { description: 'Barcelona ', name: 'Carlos request Develhope' };
  

fetch("https://northwind.vercel.app/api/categories",{
    
})
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))