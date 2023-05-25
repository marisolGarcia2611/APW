const container = document.querySelector(".carrito__info");
const coffes =[
    {name: "Cafe 1", images:"images/cafe5.jpg"}
    
]
const showCoffes=()=>{
    let output = ""
    coffes.forEach(
        ({name,images})=>
        (output +=`
        
            
            
            
    
           
        
        `)
        )
        container.innerHTML = output 
}

document.addEventListener("DOMContentLoaded", showCoffes)