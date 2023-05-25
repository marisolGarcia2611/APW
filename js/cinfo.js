const container = document.querySelector(".c__info");
const coffes =[
    {name: "Cafe 1", images:"images/cafe5.jpg"}
    
]
const showCoffes=()=>{
    let output = ""
    coffes.forEach(
        ({name,images})=>
        (output +=`
        
            <a href="" class="card1"> 
            <img src="${images}" class="card__image" alt="" />
            <div class="card__overlay">
                <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img class="card__thumb" src="images/icon.png" alt="" />
                <div class="card__header-text">
                    <h3 class="card__title">${name}</h3>        
                </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </a> 
            
            <div class="space__cant">
                <h3 class="t1">Elije la cantidad de tu orden</h3>
                <button class="btn__cant" id='disminuir' onclick="disminuir()">-</button> 
                <input class="inpt__cant" type='text' id="cantidad" value="0">
                <button class="btn__cant" id='aumentar' onclick="aumentar()">+</button> 
                <br/>
                <button class="btn1__cant"><a href="carrito.html" class="btn__link">Continuar</a></button> 
                  
            </div> 
    
           
        
        `)
        )
        container.innerHTML = output 
}

document.addEventListener("DOMContentLoaded", showCoffes)