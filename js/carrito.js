//#region VISTA3-> CARRITO
const showShoppingCar = () => {
   container.classList.remove("container")
   container.classList.add("container-grid-row")
   let output = ""
   listProducts.map(product => {
      output += `
      <div class="cardCarrito">
         <img class="card--avatar" src="${product.img}"/>
         <div>
            <h1 class="card--title">${product.name}</h1>
            <p>${product.description}</p>
         </div>
         <div class="d-flex pb-1">
            <button class="btn__cant" onclick="less(document.querySelector('#quantity_${product.id}'))">-</button> 
            <div class="number" id="quantity_${product.id}" name="quantity_${product.id}">${product.quantity}</div>
            <button class="btn__cant" onclick="plus(document.querySelector('#quantity_${product.id}'))">+</button> 
         </div>
      </div>
      `
   })

   let disabled = ""
   let disabled_class = ""
   if (listProducts.length == 0) {
      disabled_class = "disabled"
      disabled = "disabled=true"
   }
   output += `
   <div class="item-aling">
      <button type="button" class="btn1__cant1 mb-2  ${disabled_class}" onclick="shop()" ${disabled}>Finalizar compra</button>
   </div>
   `
   container.innerHTML = output
}

const shop = () => {
   alert("Compra Realicada Exitozamente...");
   localStorage.clear();
   listProducts = []
   showShoppingCar()
}
//#endregion VISTA3 -> CARRITO
