//#region VISTA2 -> PRODUCTO
const productView = (id,name,img) => {
   container.classList.remove("container-grid-row")
   container.classList.add("container")
   container.innerHTML = ""
   product.id = id
   product.name = name
   product.img = img
   product.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis eveniet dolor."
   product.quantity = 0

   let card_info = `

   <a class="card1"> 
   <img src="${product.img}" class="card__image" alt="" />
   <div class="card__overlay">
       <div class="card__header">
       <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
       <img class="card__thumb" src="images/icon.png" alt="" />
       <div class="card__header-text">
           <h3 class="card__title">${product.name}</h3>        
       </div>
       </div>
       <p class="card__description">${product.description}</p>
   </div>
   </a> 
   
   <div class="space__cant">
   <h3 class="t1">Elije la cantidad de tu orden</h3>
   <button class="btn__cant" onclick="less(document.querySelector('#quantity'))">-</button> 
   <div class="number" id="quantity" name="quantity">${product.quantity}</div>
   <button class="btn__cant" onclick="plus(document.querySelector('#quantity'))">+</button> 
   <br/>
   <button type="button" class="btn1__cant" onclick="add()">Agregar al carrito</button>
   </div> 

   `
   container.innerHTML = card_info
}

const less = (input_quantity) => {
   product.quantity = Number(input_quantity.textContent);
   product.quantity == 0 ?  product.quantity = 0 : product.quantity--;
   input_quantity.textContent = product.quantity;
}
const plus = (input_quantity) => {
   product.quantity = Number(input_quantity.textContent);
   product.quantity++;
   input_quantity.textContent = product.quantity;
}
const add = () => {
   listProducts = JSON.parse(localStorage.getItem("listProducts"))
   if (listProducts == null) listProducts = [];

   if (product.quantity == 0) return
   const response = addToExist(listProducts, product)
   if (response.exist) listProducts = response.data
   else listProducts.push(product);
   localStorage.setItem('listProducts', JSON.stringify(listProducts));
   // product.quantity=0
   document.querySelector("#quantity").textContent = "0";
   alert("Agregaste un nuevo producto al carrito")
}

const addToExist = (list, product) => {
   let response = {
      exist: false,
      data: list
   }
   list.map(p => {      
      if (product.id == p.id) {
         p.quantity += product.quantity
         response.exist = true
         response.data = list
         return
      }
   })
   return response
}
//#endregion VISTA2 -> PRODUCTO