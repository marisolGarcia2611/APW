const container = document.querySelector(".container");
const coffes =[
    {id: 1, name: "Cafe 1", img:"images/cafe8.jpg"},
    {id: 2, name: "Cafe 2", img:"images/cafe6.jpg"},
    {id: 3, name: "Cafe 3", img:"images/cafe7.jpg"},
    {id: 4, name: "Cafe 4", img:"images/cafe5.png"},
    {id: 5, name: "Cafe 5", img:"images/cafe9.jpg"},
    {id: 6, name: "Cafe 6", img:"images/cafe10.jpg"},
    {id: 7, name: "Cafe 7", img:"images/cafe1.png"},
    {id: 8, name: "Cafe 8", img:"images/cafe2.png"},
    // {name: "Cafe 9", images:"images/cafe3.png"},
    {id: 9, name: "Cafe 9", img:"images/cafe4.png"}
    
]

let listProducts = JSON.parse(localStorage.getItem("listProducts"))
if (listProducts == null) {
   listProducts = [];
}

let product = {
   id: null,
   name: null,
   img: null,
   description: null,
   quantity: null,
}



//#region VISTA 1 -> LISTA DE PRODUCTOS
const showCoffes = () => {
   container.classList.remove("container-grid-row")
   container.classList.add("container")
   let output = ""
   coffes.forEach(({id,name,img}) => (
      output += `
      <div class="card">
         <img class="card--avatar" src="${img}"/>
         <h1 class="card--title">${name}</h1>
         <button onclick="productView('${id}','${name}','${img}')" class="card--link">Ver producto</button>
      </div>`
   ))
   container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffes);

if ("serviceWorker" in navigator) {
   window.addEventListener("load", function(){
      navigator.serviceWorker
      .register("js/ServiceWorker.js")
      .then(res => console.log("ServiceWorker registrado"))
      .catch(err => console.log("ServiceWorker con error", err))
   })
}
//#endregion VISTA 1 -> LISTA DE PRODUCTOS