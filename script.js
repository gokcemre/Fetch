

// const row = document.querySelector(".row")

// // ! Fetch ile İstek Atma

// fetch("https://jsonplaceholder.typicode.com/users")

// .then(function(response){
//     // console.log(response)
//     return response.json()
    
// })

// .then(function(data){
//     console.log(data)
//     data.forEach(function(veri){
//         row.innerHTML += ` <div class="col-4">
//         <div class="card" style="width: 18rem;">
//             <img src="person.webp" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${veri.name}</h5>
//               <p class="card-text">${veri.address.city}</p>
//               <p class="card-text">${veri.email}</p>
//               <p class="card-text">${veri.website}</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
//         </div>`
//     })
// })


const row = document.querySelector(".row")
const div = document.querySelector(".div")
fetch ("https://jsonplaceholder.typicode.com/photos")
 
.then(function(response){
    return response.json()
})
.then(function(data){
  
for(let i = 0; i < 100; i++){
    row.innerHTML += `<div class="col-4 mt-4">
    <p>${data[i].id}</p>
    <div class="div">
        <img src="${data[i].url}" alt="">
    </div>
</div>`
}
})