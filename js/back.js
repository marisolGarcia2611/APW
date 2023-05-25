const  back= document.querySelector('#back');

back.innerHTML = `
      <div class="wrapper">
         <p class="btn1" onClick="showCoffes()"><img width="20px" height="20px" src="./images/arrow.png"/></p>
      </div>
      <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
         <defs>
               <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
               </filter>
         </defs>
      </svg>

`