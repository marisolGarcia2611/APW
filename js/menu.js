const navbar = document.querySelector('#navbar');

navbar.innerHTML = `
<input id ="menu__toggle" type="checkbox" class='menu__toggle'/>
<label for="menu__toggle" class="menu__toggle-label transition">
  <svg class="svg" preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
    <path class="path" d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
  </svg>
</label>
<nav>
    <h1 class="navTittle">Cafetería</h1>
</nav>
<ol class='nav__ol menu__content'>
  <li class="menu-item"><a class="it" onclick="showCoffes()" href="#0"><i class="fa-solid fa-home carrito"></i> Home</a></li>
  <li class="menu-item"><a class="it" onclick="showShoppingCar()" href="#0"><i class="fa-solid fa-cart-shopping carrito"></i> Carrito</a></li>
<!-- <li class="menu-item"><a class="it" href="#0">Blog</a></li>-->
  <li class="menu-item">
    <a class="it" href="#0"></a>
    <ol class="nav__ol sub-menu">
      <li class="menu-item"><a class="it" href="#0"></a></li>
      <li class="menu-item"><a class="it" href="#0"></a></li>
      <li class="menu-item"><a class="it" href="#0"></a></li>
    </ol>
  </li>
  <li class="menu-item">
    <a class="it" href="#0"></a>
    <ol class="nav__ol sub-menu">
      <li class="menu-item"><a class="it" href="#0"></a></li>
      <li class="menu-item"><a class="it" href="#0"></a></li>
      <li class="menu-item"><a class="it" href="#0"></a></li>
    </ol>
  </li>
  <li class="menu-item"><a class="it" href="#0"></a></li>
</ol>
`